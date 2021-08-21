import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PapeisUsuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('papel').notNullable().defaultTo('cliente')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('papel')
    })
  }
}
