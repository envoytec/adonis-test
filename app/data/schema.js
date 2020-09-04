'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
    type Pokemon {
        id: Int!
        name: String!
        next_evolution: Pokemon!
        previous_evolution: Pokemon!
        type: Type!
    }

    type Type {
        id: Int!
        name: String!
        weak: Type!
        strength: Type!
    }

    type Query {
        allPokemons: [Pokemon]
        fetchPokemon(id: Int!): Pokemon
        allTypes: [Type]
        fetchType(id: Int!): Type
    }

    type Mutation {
        createPokemon (name: String!, next_evolution_id: Int, previous_evolution_id: Int, type_id: Int!): Pokemon
        createType (name: String!, weak: Int!, strength: Int! ): Type
    }
`
module.exports = makeExecutableSchema({ typeDefs, resolvers })