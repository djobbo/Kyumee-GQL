module.exports = {
    Query: {
        ...require('./queries/Connection'),
        ...require('./queries/Node')
    },
    Mutation: {},
    Node: {
        __resolveType() {
            return null;
        }
    },
    Connection: {
        __resolveType() {
            return null;
        }
    }
}