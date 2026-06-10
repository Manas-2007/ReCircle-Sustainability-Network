const GarbageRequests = require('../models/Request');
const User = require('../models/User');

// --- HOUSEKEEPER FUNCTIONS ---

// 1. Create Request
const createRequest = async (req, res) => {
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
};

// 2. Get My Requests
const getMyRequests = async (req, res) => {
  try {
    const myRequests = await GarbageRequests.find({ housekeeperId: req.user.id }).sort({ createdAt: -1 });
    res.json(myRequests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
};

// 3. Redeem Rewards
const redeemRewards = async (req, res) => {
  try {
    const { rewardId, pointsCost } = req.body;
    const user = await User.findById(req.user.id);

    if (user.points < pointsCost) return res.status(400).json({ message: "Insufficient points" });
    if (user.redeemedRewards.includes(rewardId)) return res.status(400).json({ message: "Already redeemed" });
  
    user.points -= pointsCost;
    user.redeemedRewards.push(rewardId);
    await user.save();

    res.json({ message: "Success", newPoints: user.points });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 4. Get Leaderboard
const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find({ role: 'household', points: { $gt: 0 } })
      .sort({ points: -1 }) 
      .limit(10)
      .select('firstName lastName points');
    
    res.json(users);
  } catch (err) {
    console.error("Leaderboard Fetch Error:", err);
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
};


// --- COLLECTOR FUNCTIONS ---

// 5. Get Pending Requests
const getPendingRequests = async (req, res) => {
  try {
    const requests = await GarbageRequests.find({
      $or: [
        { status: 'Pending' },
        { status: 'Accepted', collectorId: req.user.id }
      ]
    }).sort({ createdAt: -1 });
    
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch" });
  }
};

// 6. Accept Request
const acceptRequest = async (req, res) => {
  try {
    const request = await GarbageRequests.findById(req.params.id);
    
    if (request.status !== 'Pending') {
        return res.status(400).json({ error: "Already accepted by someone else" });
    }

    request.status = 'Accepted';
    request.collectorId = req.user.id;
    await request.save();
    
    res.json({ message: "Accepted!", request });
  } catch (err) { 
    res.status(500).json({ error: "Failed to accept request" }); 
  }
};

// 7. Schedule Pickup
const schedulePickup = async (req, res) => {
  try {
    const { date, time } = req.body;
    const updatedReq = await GarbageRequests.findByIdAndUpdate(
      req.params.id,
      { scheduledDate: date, scheduledTime: time, status: 'Scheduled' },
      { new: true }
    );
    res.json(updatedReq);
  } catch (err) { 
    res.status(500).json({ error: "Failed to schedule pickup" }); 
  }
};

// 8. Cancel Request
const cancelRequest = async (req, res) => {
  try {
    const updatedReq = await GarbageRequests.findByIdAndUpdate(
      req.params.id,
      { 
        status: 'Pending', 
        collectorId: null, 
        scheduledDate: null, 
        scheduledTime: null 
      },
      { new: true }
    );
    res.json(updatedReq);
  } catch (err) { res.status(500).json({ error: "Failed to cancel" }); }
};

// 9. Update Status (Delivered / Cancelled fallback)
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const request = await GarbageRequests.findById(req.params.id);

    if (!request) return res.status(404).json({ message: "Request not found" });
    if (request.status === 'Delivered' && status === 'Delivered') {
      return res.status(400).json({ message: "Request is already marked as Delivered!" });
    }

    if (status === 'Cancelled') {
      request.status = 'Pending'; 
      request.previousCollectorId = request.collectorId; 
      request.collectorId = null; 
    } else if (status === 'Delivered') {
      request.status = 'Delivered';
      
      const housekeeper = await User.findById(request.housekeeperId);
      if (housekeeper) {
        const earnedPoints = request.points || (request.quantity * 10); 
        housekeeper.points = (housekeeper.points || 0) + earnedPoints; 
        await housekeeper.save();
      }

      const collector = await User.findById(request.collectorId);
      if (collector) {
        const earnings = request.points || (request.quantity * 10);
        collector.walletBalance = (collector.walletBalance || 0) + earnings;
        await collector.save();
      }
    } else {
      request.status = status;
    }

    await request.save();
    res.json(request);
  } catch (err) { 
    console.error("Status Update Error:", err);
    res.status(500).json({ error: "Update failed" }); 
  }
};

// 10. Get Collector Updates (Notifications)
const getCollectorUpdates = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id; 
    if (!userId) return res.status(401).json({ error: "Unauthorized: User ID missing" });

    const requests = await GarbageRequests.find({
      $and: [
        {
          $or: [
            { collectorId: userId, status: 'Delivered' },
            { previousCollectorId: userId, status: 'Pending' }
          ]
        },
        { hiddenFromCollector: { $ne: true } } 
      ]
    }).sort({ createdAt: -1 });

    const formattedRequests = requests.map(request => {
      const reqObj = request.toObject();
      if (
        reqObj.previousCollectorId && 
        reqObj.previousCollectorId.toString() === userId.toString() && 
        reqObj.status === 'Pending'
      ) {
        reqObj.status = 'Cancelled';
      }
      return reqObj;
    });

    res.json(formattedRequests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch updates", details: err.message });
  }
};

// 11. Get Completed History
const getHistory = async (req, res) => {
  try {
    const history = await GarbageRequests.find({
      collectorId: req.user.id,
      status: 'Delivered'
    }).sort({ createdAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};

// 12. Delete Notification
const deleteNotification = async (req, res) => {
  try {
    const updatedItem = await GarbageRequests.findByIdAndUpdate(
      req.params.id, 
      { hiddenFromCollector: true }, 
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: "Notification not found" });
    res.status(200).json({ message: "Notification hidden successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 13. Get Collector Info (For Housekeeper)
const getCollectorInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('firstName lastName email phone');
    res.json(user);
  } catch (err) { res.status(500).json({ error: "Fail" }); }
};

module.exports = {
  createRequest, getMyRequests, redeemRewards, getLeaderboard,
  getPendingRequests, acceptRequest, schedulePickup, cancelRequest,
  updateStatus, getCollectorUpdates, getHistory, deleteNotification, getCollectorInfo
};