module.exports = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  res.send({ signup: 'working', email: email, password: password });
};
