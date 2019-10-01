const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const database = `mongodb+srv://Corehalla:${process.env.MATLAS_KEY}@corehalla-xtv6m.mongodb.net/kyumee?retryWrites=true&w=majority`;
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`📙  Database Connected!`);
        const server = new ApolloServer({ typeDefs, resolvers });

        server.listen('31199').then(({ url }) => {
            console.log(`🚀  Server ready!`);
        });

    })
    .catch(err => console.log(err));