const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['household', 'collector'], default: 'household' },
    points: { type: Number, default: 0 },
    walletBalance: { type: Number, default: 0 },
    redeemedRewards: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);