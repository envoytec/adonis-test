'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
    type(){
        return this.hasMany('App/Model/Type')
    }
    next_evolution() {
        return this.hasOne('App/Model/Pokemon')
    }
    previous_evolution() {
        return this.hasOne('App/Model/Pokemon')
    }
}

module.exports = Pokemon
