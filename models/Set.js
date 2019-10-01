const mongoose = require('mongoose');

const { SetSchema, EventSchema, GameSchema } = require('./schemaDefs');

SetSchema.add({
    displayScore: String,
    event: EventSchema,
    games: [GameSchema]
});

module.exports = mongoose.model('Set', SetSchema);