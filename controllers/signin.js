const User = require('../models/user');
const createToken = require('../helpers/token');
/**
 * @apiIgnore Not finished Method
 * @api {get} /user/:id
 */
module.exports = function(req, res) {
  const user = req.user;
  return res.send({ token: createToken(user) });
};
