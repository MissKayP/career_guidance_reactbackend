const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user data to the request
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};