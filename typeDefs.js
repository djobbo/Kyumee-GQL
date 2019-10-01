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
    ${require('./types/UserConnection.gql')}
    ${require('./types/League.gql')}
    ${require('./types/LeagueConnection.gql')}
    ${require('./types/Event.gql')}
    ${require('./types/Set.gql')}
    ${require('./types/SetConnection.gql')}
    ${require('./types/Game.gql')}
    ${require('./types/Entrant.gql')}
    ${require('./types/EntrantConnection.gql')}
    ${require('./types/Standing.gql')}
    ${require('./types/StandingConnection.gql')}
    ${require('./types/Participant.gql')}
    ${require('./types/ParticipantConnection.gql')}
    ${require('./types/PageInfo.gql')}
`