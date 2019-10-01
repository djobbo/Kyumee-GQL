const mongoose = require('mongoose');

const { EntrantSchema, Entrants, SetSchema, StandingSchema, LeagueSchema } = require('./schemaDefs');

EntrantSchema.add({
    event: EventSchema,
    participants: [ParticipantSchema],
    name: String
});

module.exports = mongoose.model('Entrant', EntrantSchema);