import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column, beforeSave, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public sobrenome: string

  @column()
  public email: string

  @column()
  public senha: string

  @column()
  public papel: string

  @computed()
  public get password() {
    return this.senha
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashSenha(usuario: Usuario) {
    if (usuario.$dirty.senha) {
      usuario.senha = await Hash.make(usuario.senha)
    }
  }
}
