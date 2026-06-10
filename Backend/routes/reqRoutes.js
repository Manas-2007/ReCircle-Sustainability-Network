// routes/reqRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { authMiddleware } = require('../middleware/auth');
const reqController = require('../controllers/reqController');

// Image storage by Multer 
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Housekeeper Routes
router.post('/requests/create', authMiddleware, upload.single('image'), reqController.createRequest);
router.get('/requests/my-requests', authMiddleware, reqController.getMyRequests);
router.post('/rewards/redeem', authMiddleware, reqController.redeemRewards);
router.get('/users/leaderboard', reqController.getLeaderboard);

// Collector Routes
router.get('/requests/pending', authMiddleware, reqController.getPendingRequests);
router.patch('/requests/accept/:id', authMiddleware, reqController.acceptRequest);
router.patch('/requests/schedule/:id', authMiddleware, reqController.schedulePickup);
router.patch('/requests/cancel/:id', authMiddleware, reqController.cancelRequest);
router.patch('/requests/update-status/:id', authMiddleware, reqController.updateStatus);
router.get('/requests/collector-updates', authMiddleware, reqController.getCollectorUpdates);
router.get('/requests/history', authMiddleware, reqController.getHistory);
router.delete('/requests/notification/:id', reqController.deleteNotification);
router.get('/users/collector/:id', authMiddleware, reqController.getCollectorInfo);

module.exports = router;