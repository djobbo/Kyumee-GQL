const mongoose = require('mongoose');

const { EventSchema, EntrantSchema, SetSchema, StandingSchema, LeagueSchema } = require('./schemaDefs');

EventSchema.add({
    entrants: [EntrantSchema],
    sets: [SetSchema],
    standings: [StandingSchema],
    timezone: String,
    numEntrants: Number,
    league: LeagueSchema,
    rulesMarkdown: String
});

module.exports = mongoose.model('Event', EventSchema);