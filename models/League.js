const mongoose = require('mongoose');

const { LeagueSchema, EventSchema, ParticipantSchema } = require('./schemaDefs');

LeagueSchema.add({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    slug: String,
    shortSlug: String,
    events: [EventSchema],
    participants: [ParticipantSchema]
});

module.exports = mongoose.model('League', LeagueSchema);