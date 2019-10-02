const mongoose = require('mongoose');

const User = require('../models/User');

module.exports = {
    user: (_, { id }) => {
        User.findById(id)
            .then(user => {
                return user;
            })
            .catch(console.error)
    }
}