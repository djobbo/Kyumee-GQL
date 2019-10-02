const mongoose = require('mongoose');

const Event = require('../models/Event');

module.exports = {
    event: (_, { id }) => {
        Event.findById(id)
            .then(event => {
                return event;
            })
            .catch(console.error)
    }
}