const User = require('../models/user');

module.exports = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({ email: email, password: password });
  user.save();
  res.send({ signup: 'working', email: email, password: password });
};
