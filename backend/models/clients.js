// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('clients', UserSchema);
