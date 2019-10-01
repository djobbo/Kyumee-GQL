const mongoose = require('mongoose');
const slugify = require('slugify');

const League = require('../models/League');

module.exports = {
    createLeague: (_, { name }) => {
        const slug = slugify(name, {
            replacement: '_',
            remove: /[[*+~.()'"!:@\]]/g,
            lower: true,
        })
        new League({
            name,
            slug,
            shortSlug: slug,
        })
            .save()
            .then(newLeague => {
                return newLeague
            })
            .catch(console.error)
    }
}