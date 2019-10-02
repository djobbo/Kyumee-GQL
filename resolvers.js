module.exports = {
    Query: {
        ...require('./resolvers/queries/User'),
        ...require('./resolvers/queries/League'),
        ...require('./resolvers/queries/Event')
    },
    Mutation: {
        ...require('./resolvers/mutations/User'),
        ...require('./resolvers/mutations/League'),
        ...require('./resolvers/mutations/Event')
    }
}