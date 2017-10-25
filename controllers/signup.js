const User = require('../models/user');

module.exports = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({ email: email, password: password });
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return res.status(422).send(err.errmsg);
    if (existingUser) return res.status(422).send('Email in use');
    user.save(function(err, user) {
      if (err) return res.status(422).send(err.errmsg);
      return res.send(user);
    });
  });
};
