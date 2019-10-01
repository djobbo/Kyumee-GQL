const mongoose = require('mongoose');

module.exports = {
    UserSchema: new mongoose.Schema(),
    LeagueSchema: new mongoose.Schema(),
    EventSchema: new mongoose.Schema(),
    SetSchema: new mongoose.Schema(),
    GameSchema: new mongoose.Schema(),
    EntrantSchema: new mongoose.Schema(),
    StandingSchema: new mongoose.Schema(),
    ParticipantSchema: new mongoose.Schema(),
    PageInfoSchema: new mongoose.Schema(),
    GameSelectionSchema: new mongoose.Schema()
}