require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const path = require('path');

// Route Imports
const authRoutes = require('./routes/authRoutes');
const reqRoutes = require('./routes/reqRoutes');

const app = express();
const PORT = 2007;

// 1. Connect to Database
connectDB();

// 2. Global Middlewares
app.use(cors({
    origin: 'https://re-circle-sustainability-network.vercel.app', 
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

//4. Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

//5. Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 4. Start Server
app.listen(PORT, () => {
    console.log(`Server is Live at http://localhost:${PORT} 🚀`);
});