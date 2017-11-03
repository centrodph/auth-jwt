const User = require('../models/user');
const createToken = require('../helpers/token');
/**
 * @apiIgnore Not finished Method
 * @api {get} /user/:id
 */
module.exports = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({ email: email, password: password });

  //Find
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return res.status(422).send(err.errmsg);
    if (existingUser) return res.status(422).send('Email in use');
    //If dont exist's
    user.save(function(err, user) {
      if (err) return res.status(422).send(err.errmsg);

      //Return a JWT
      return res.send({ token: createToken(user) });
    });
  });
};
