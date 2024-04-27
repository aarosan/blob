const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';

module.exports = {
  authMiddleware: function ( req, res, next ) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization && token.startsWith('Bearer ')) {
      token = token.slice(7);
    }

    console.log(token)

    if (!token) {
      return next();
    }

    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded.data;
      next();
    } catch (error) {
      console.error('Error in authentication:', error);
      req.user = null;
      res.status(401).json({ message: 'Invalid token' }); 
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret);
  },
};
