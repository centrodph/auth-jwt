const jwt = require('jwt-simple');
const config = require('../config/keys');

/**
 * DOCS: https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields
 * @method
 * @param  {[type]} user [description]
 * @return {[type]}      [description]
 */
module.exports = function(user) {
  const date = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: date }, config.secret);
};
