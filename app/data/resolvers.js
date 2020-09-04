'use strict'

const User = use('App/Models/User')
const Pokemon = use('App/Models/Pokemon')
const Token = use('App/Models/Token')

const resolvers = {
    Query: {
        async allPokemons() {
            const pokemons = await Pokemon.all()
            return pokemons.toJSON()
        },

        async fetchPokemon(_, { id }) {
            const pokemon = await Pokemon.find(id)
            return pokemon.toJSON()
        },

        async allTypes() {
            const types = await Type.all()
            return types.toJSON()
        },

        async fetchType(_, { id }) {
            const type = await Type.find(id)
            return type.toJSON()
        }
    },

    Mutation: {
        async createPokemon(_, { name, type_id, next_evolution_id, previous_evolution_id }) {
            return await Pokemon.create({ name, type_id, next_evolution_id, previous_evolution_id })
        },

        async createType(_, { name, strength, weak }) {
            return await Type.create({ name, strength, weak })
        }
    }
}

module.exports = resolvers