const User = require('../models/user');
const createToken = require('../helpers/token');

module.exports = function(req, res) {
  const user = req.user;
  console.log(req);
  return res.send({ token: createToken(user) });
};
