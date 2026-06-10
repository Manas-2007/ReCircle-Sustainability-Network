const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authMiddleware, verifyToken } = require('../middleware/auth');
const authController = require('../controllers/authController');

// Validations
const registerValidation = [
  body('firstName').matches(/^[A-Za-z\s]+$/).withMessage('Name should not contain numbers'),
  body('phone').isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digits'),
  body('password').isLength({ min: 6 }).withMessage('Min 6 characters'),
  body('pincode').isNumeric().isLength({ min: 6, max: 6 }).withMessage('Pincode must be 6 digits')
];

const loginValidation = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required')
];

// Routes mapping
router.post('/auth/register', registerValidation, authController.register);
router.post('/auth/login', loginValidation, authController.login);
router.get('/auth/me', verifyToken, authController.getMe);
router.post('/auth/logout', authController.logout);
router.get('/user/profile', authMiddleware, authController.getProfile);

module.exports = router;