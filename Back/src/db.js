const mongoose = require('mongoose');

// Modelo de usuário
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
