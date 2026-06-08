let express=require('express');
const PORT=2007;
const app=express();
const multer = require('multer');
const path = require('path');
const cors=require('cors');
const mongoose=require('mongoose');
const dns=require('dns');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { body, validationResult } = require('express-validator');

dns.setServers(['1.1.1.1'],['8.8.8.8']);

mongoose.connect('mongodb+srv://ishanvi:ishanvi123@recircle-sustainability.ln71odq.mongodb.net/recircle_db?appName=Recircle-Sustainability-Network')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('DB Error:', err));

  //Image storage by Multer
  const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

  //SCHEMA OF REGISTRATION OF HOUSEKEEPER SIDE
  const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['household', 'collector'], default: 'household' },
    points: { type: Number, default: 0 }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);


//SCHEMA OF GARBAGE REQUESTS
const garbageRequestSchema = new mongoose.Schema({
  housekeeperId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Kaun request kar raha hai?
  requesterName: { type: String, required: true },
  wasteType: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  pincode: { type: String, required: true },
  points: { type: Number },
  status: { type: String, default: 'Pending' }, 
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});
const GarbageRequests = mongoose.model('GarbageRequests', garbageRequestSchema);


//Middlewares
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
const JWT_SECRET = 'recircle_secure_key_2026';
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cookieParser());

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); 
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

// Validation rules
const registerValidation = [
  body('firstName').matches(/^[A-Za-z\s]+$/).withMessage('Name should not contain numbers'),
  body('phone').isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digits'),
  body('password').isLength({ min: 6 }).withMessage('Min 6 characters'),
  body('confirmPassword').custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match'),
  body('pincode').isNumeric().isLength({ min: 6, max: 6 }).withMessage('Pincode must be 6 digits'),
  body('terms').equals('true').withMessage('Terms must be accepted')
];

const loginValidation = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required')
];

//Registration Routes of Housekeeper side
app.post('/api/auth/register', registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { firstName, lastName, address, pincode, email, phone, password, role } = req.body;
        
        const existingUser = await User.findOne({ 
            $or: [{ email: email }, { phone: phone }] 
        });
        
        if (existingUser) {
            if (existingUser.email === email) return res.status(400).json({ message: 'Email already exists' });
            if (existingUser.phone === phone) return res.status(400).json({ message: 'Phone already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, address, pincode, email, phone, password: hashedPassword, role });
        
        // 👇 PERMANENT FIX: Ye line missing thi! Iske bina DB mein kuch nahi jayega.
        await newUser.save(); 
        
        res.status(201).json({ 
            message: 'Registration successful', 
            user: { id: newUser._id, firstName: newUser.firstName, role: newUser.role } 
        });

    } catch (err) {
        console.error(err); // Debugging ke liye isse add kar lo
        res.status(500).json({ message: 'Server error, try later' });
    }
});


//Login Routes of Housekeeper side
app.post('/api/auth/login', loginValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

        // LOGIN ROUTE: Yahan hum Cookie SET kar rahe hain
        res.cookie('token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            path:'/',
            maxAge: 86400000 
        });

        res.json({ message: 'Login successful', user: { id: user._id, firstName: user.firstName, role: user.role } });
    } catch (err) {
        res.status(500).json({ message: 'Server error, try later' });
    }
});

// SECURITY MIDDLEWARE (The Bouncer)
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Not logged in' });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified; 
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

// PERSISTENT LOGIN (For Page Refresh)
app.get('/api/auth/me', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ user });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
app.listen(PORT,()=>{
    console.log(`Server is Live at http://localhost:${PORT}`);
});

//Logout Function
app.post('/api/auth/logout', (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0), 
        path: '/'
    });
    res.json({ message: 'Logged out successfully' });
});


                    //GARBAGE MODEL DEALINGS  (HOUSEKEEPER)
 // Create Request Route
app.post('/api/requests/create', authMiddleware, upload.single('image'),async (req, res) => {
  try {
    const { name, wasteType, quantity, location, pincode, points } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    
    const newRequest = new GarbageRequests({
      housekeeperId: req.user.id,
      requesterName: name,
      wasteType,
      quantity,
      location,
      pincode,
      points,
      image: imageUrl
    });

    await newRequest.save();
    res.status(201).json({ message: "Request created successfully!", request: newRequest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get My Requests Route
app.get('/api/requests/my-requests', authMiddleware, async (req, res) => {
  try {
    const myRequests = await GarbageRequests.find({ housekeeperId: req.user.id }).sort({ createdAt: -1 });
    res.json(myRequests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});


                    //GARBAGE CARDS DEALING  (COLLECTOR)
// 1. Get ALL Pending Requests
app.get('/api/requests/pending', authMiddleware, async (req, res) => {
  try {
    // Sirf 'Pending' status wali requests lao
    const requests = await GarbageRequests.find({ status: 'Pending' }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch pending requests" });
  }
});

// 2. Accept Request
app.patch('/api/requests/accept/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReq = await GarbageRequests.findByIdAndUpdate(
      id, 
      { status: 'Accepted' }, 
      { new: true }
    );
    res.json({ message: "Request Accepted!", request: updatedReq });
  } catch (err) {
    res.status(500).json({ error: "Failed to accept request" });
  }
});

