'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeSchema extends Schema {
  up () {
    this.create('types', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table
        .integer('weak_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .notNullable()
      table
        .integer('strength_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypeSchema
