const jwt = require('jsonwebtoken');
const JWT_SECRET = 'recircle_secure_key_2026';

// Auth Middleware (Housekeeper/Collector both)
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

// Security Middleware to verify token for protected routes
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

module.exports = { authMiddleware, verifyToken, JWT_SECRET };