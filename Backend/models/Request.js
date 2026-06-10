const mongoose = require('mongoose');

const garbageRequestSchema = new mongoose.Schema({
  housekeeperId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requesterName: { type: String, required: true },
  wasteType: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  pincode: { type: String, required: true },
  points: { type: Number },
  status: { type: String, default: 'Pending' }, 
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  collectorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    default: null
  },
  previousCollectorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    default: null
  },
  scheduledDate: { type: String },
  scheduledTime: { type: String },
  hiddenFromCollector: { type: Boolean, default: false },
});

module.exports = mongoose.model('GarbageRequests', garbageRequestSchema);