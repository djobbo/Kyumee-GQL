const mongoose = require('mongoose');

const Event = require('../models/Event');
const League = require('../models/League');

module.exports = {
    createEvent: (_, { name, leagueId }) => {
        League.findById(leagueId)
            .then(league => {
                if (league) {
                    new Event({ name, league })
                        .save()
                        .then(newEvent => {
                            league.events.push(newEvent);
                            league.save()
                                .then(_ => {
                                    return newEvent
                                })
                                .catch(console.error)
                        })
                        .catch(console.error)
                }
                else {
                    return;
                }
            })
            .catch(console.error)
    }
}