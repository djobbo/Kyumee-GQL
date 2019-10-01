module.exports = {
    Query: {
        ...require('./queries/User'),
        ...require('./queries/League'),
        ...require('./queries/Event')
    },
    Mutation: {
        ...require('./mutations/User'),
        ...require('./mutations/League'),
        ...require('./mutations/Event')
    }
}