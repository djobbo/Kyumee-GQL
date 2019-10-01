const mongoose = require('mongoose');

const { GameSchema, GameSelectionSchema, SetSchema } = require('./schemaDefs');

GameSchema.add({
    selections: [GameSelectionSchema],
    set: SetSchema,
    orderNum: Int,
    winnerId: Int
});

module.exports = mongoose.model('Game', GameSchema);