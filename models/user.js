const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'string', unique: true, lowercase: true },
  password: 'string'
});
// Create the model class
const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
