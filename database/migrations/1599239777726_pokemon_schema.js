'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up () {
    this.create('pokemons', (table) => {
      table.increments('id')
      table.timestamps()
      table.string('name').notNullable()
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .notNullable()
      table
        .integer('next_evolution_id')
        .unsigned()
        .references('id')
        .inTable('pokemons')
        .onUpdate('CASCADE')
        .nullable()
      table
        .integer('previous_evolution_id')
        .unsigned()
        .references('id')
        .inTable('pokemons')
        .onUpdate('CASCADE')
        .nullable()
    })
  }

  down () {
    this.drop('pokemons')
  }
}

module.exports = PokemonSchema
