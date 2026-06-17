require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const path = require('path');
const dns = require('dns');
dns.setServers(['1.1.1.1','8.8.8.8']);

// Route Imports
const authRoutes = require('./routes/authRoutes');
const reqRoutes = require('./routes/reqRoutes');

const app = express();
const PORT = process.env.PORT || 2007;

// 1. Connect to Database
connectDB();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:5173', 
  'https://re-circle-sustainability-network.vercel.app'
];

// 2. Global Middlewares
app.use(cors({
    origin: allowedOrigins, 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads')); 

// 3. API Routes Wiring
app.use('/api', authRoutes);
app.use('/api', reqRoutes);

app.get('/api/keep-alive', (req, res) => {
    res.status(200).json({ message: "Server is awake!" });
});

// 4. Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// 5. Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 6. Start Server
app.listen(PORT, () => {
    console.log(`Server is Live at http://localhost:${PORT} 🚀`);

    const url = process.env.NODE_ENV === 'production' 
        ? 'https://recircle-sustainability-network.onrender.com/api/keep-alive' 
        : `http://localhost:${PORT}/api/keep-alive`;

    setInterval(async () => {
        try {
            const res = await fetch(url);
            if (res.ok) {
                console.log('⏰ Keep-alive ping successful!');
            }
        } catch (err) {
            console.error('Keep-alive ping failed:', err.message);
        }
    }, 14 * 60 * 1000); 
});