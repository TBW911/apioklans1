const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  contra: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);