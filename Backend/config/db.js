const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ishanvi:ishanvi123@recircle-sustainability.ln71odq.mongodb.net/recircle_db?appName=Recircle-Sustainability-Network');
        console.log('Connected to MongoDB 🚀');
    } catch (err) {
        console.error('DB Connection Error:', err);
        process.exit(1); 
    }
};

module.exports = connectDB;