const mongoose = require('mongoose');

const { QueueSchema } = require('./schemaDefs');

QueueSchema.add({

});

module.exports = mongoose.model('Queue', QueueSchema);