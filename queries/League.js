const mongoose = require('mongoose');

const League = require('../models/League');

module.exports = {
    league: (_, { id }) => {
        console.log(id);
        League.findById(id)
            .then(league => {
                console.log(league);
                return league;
            })
            .catch(console.error)
    }
}