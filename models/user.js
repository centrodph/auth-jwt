const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Create UserSchema
const userSchema = new Schema({
  email: { type: 'string', unique: true, lowercase: true },
  password: 'string'
});

//Save password
userSchema.pre('save', function(next) {
  const user = this;
  //Create a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    //Create a hash
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//Compare password
userSchema.methods.comparePassword = function(candidate, callback) {
  bcrypt.compare(candidate, this.password, (err, match) => {
    if (err) return callback(err, false);
    return callback(null, match);
  });
};

//Create UserModel
const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
