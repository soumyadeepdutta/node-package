const jwt = require('jsonwebtoken');

exports.auth = function (req, res, next) {
  if (!req.header('Authorization'))
    return res.status(403).send('access token required');

  const token = req.header('Authorization').split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'abcd1234');
    req.authUser = decoded;
    next();
  } catch (error) {
    return res.status(401).send('invalid auth token');
  }
};
