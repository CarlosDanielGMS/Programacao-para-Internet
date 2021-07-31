import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EspecificacoesProdutos extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.text('especificacoes')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('especificacoes')
    })
  }
}