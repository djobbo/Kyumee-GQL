const { gql } = require('apollo-server');

module.exports = gql`
    # Root
    ${require('./types/Query.gql')}
    ${require('./types/Mutation.gql')}

    # Enums
    ${require('./enums/SetSortType.gql')}

    # Interfaces
    ${require('./interfaces/Node.gql')}
    ${require('./interfaces/Connection.gql')}

    # Types
    ${require('./types/User.gql')}
    ${require('./types/PageInfo.gql')}
`