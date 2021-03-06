/** @format */

const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    // console.log('ini req body authheader', req.body);
    // const error = new Error('Not authenticated.');
    // error.statusCode = 401;
    // throw error;
    return res.status(401).json({
      error: 'Not authenticated.',
    });
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = await jwt.verify(token, 'supersecret');
  } catch (err) {
    // console.log('ini req body error 500', req.body);
    // err.statusCode = 500;
    // throw err;
    return res.status(500).json({
      error: err.message,
    });
  }
  if (!decodedToken) {
    // console.log('ini req body decodedtoken', req.body);
    // const error = new Error('Not authenticated.');
    // error.statusCode = 401;
    // throw error;
    return res.status(401).json({
      error: 'Not authenticated.',
    });
  }
  req.userLoggedin = decodedToken;
  next();
};
