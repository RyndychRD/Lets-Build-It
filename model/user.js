var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
});

var user = mongoose.model('user', userSchema);

module.exports = {
    User: user
};