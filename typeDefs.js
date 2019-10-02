const { gql } = require('apollo-server');

module.exports = gql`
    # Root
    ${require('./typeDefs/Query.gql')}
    ${require('./typeDefs/Mutation.gql')}

    # Enums
    ${require('./enums/SetSortType.gql')}
    ${require('./enums/GameSelectionType.gql')}

    # Interfaces
    ${require('./interfaces/Node.gql')}
    ${require('./interfaces/Connection.gql')}

    # Types
    ${require('./typeDefs/User.gql')}
    ${require('./typeDefs/UserConnection.gql')}
    ${require('./typeDefs/League.gql')}
    ${require('./typeDefs/LeagueConnection.gql')}
    ${require('./typeDefs/Event.gql')}
    ${require('./typeDefs/Set.gql')}
    ${require('./typeDefs/SetConnection.gql')}
    ${require('./typeDefs/Game.gql')}
    ${require('./typeDefs/Entrant.gql')}
    ${require('./typeDefs/EntrantConnection.gql')}
    ${require('./typeDefs/Standing.gql')}
    ${require('./typeDefs/StandingConnection.gql')}
    ${require('./typeDefs/Participant.gql')}
    ${require('./typeDefs/ParticipantConnection.gql')}
    ${require('./typeDefs/PageInfo.gql')}
    ${require('./typeDefs/GameSelection.gql')}
`