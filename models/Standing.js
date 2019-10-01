const mongoose = require('mongoose');

const { StandingSchema } = require('./schemaDefs');

StandingSchema.add({

});

module.exports = mongoose.model('Standing', StandingSchema);