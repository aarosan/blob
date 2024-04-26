const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateJWT = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers.authorization;
  ;

  if (!token) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    console.log('Decoded:', decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticateJWT;
