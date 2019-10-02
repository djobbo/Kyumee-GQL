const mongoose = require('mongoose');

const User = require('../models/User');

module.exports = {
    createUser: (_, { name }) => {
        new User({ name })
            .save()
            .then(newUser => {
                return newUser
            })
            .catch(console.error)
    }
}