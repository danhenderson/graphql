const express = require('express')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
const players = require('./players')

// Initialize GraphQL schema
const schema = buildSchema(`
  type Query {
    players: [Player]
    player(number: Int!): Player
  },
  type Player {
    number: Int
    name: String
    age: Int
    position: String
  }
`)

// Root resolver
const rootValue = {
  players: args => players,
  player: args => players.find(player => player.number === args.number)
}

// Create an Express server and a GraphQL endpoint
const app = express()

app.use('/graphql', graphqlHttp({
  schema,
  rootValue,
  graphiql: true // enable browser access
}))

app.listen(4000, () => console.log('http://localhost:4000/graphql'))
