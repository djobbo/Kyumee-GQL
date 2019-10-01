const mongoose = require('mongoose');

const { UserSchema } = require('./schemaDefs');

UserSchema.add({
    name: String
});

module.exports = mongoose.model('User', UserSchema);