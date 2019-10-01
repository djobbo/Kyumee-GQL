const mongoose = require('mongoose');

const { ParticipantSchema, Entrants, SetSchema, StandingSchema, LeagueSchema } = require('./schemaDefs');

ParticipantSchema.add({
    entrants: [EntrantSchema],
    events: [EventSchema],
    gamerTag: String,
    prefix: String,
    user: User
});

module.exports = mongoose.model('Participant', ParticipantSchema);