import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { HasMany } from '@adonisjs/lucid/types/relations'

import ExtractionPattern from './extraction_pattern.js'
import ExtractionRecord from './extraction_record.js'
import Record from './record.js'
import HtmlDocument from './html_document.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => ExtractionPattern)
  public extractionPatterns: HasMany<typeof ExtractionPattern>

  @hasMany(() => ExtractionRecord)
  public extractionRecords: HasMany<typeof ExtractionRecord>

  @hasMany(() => Record)
  public records: HasMany<typeof Record>

  @hasMany(() => HtmlDocument)
  public htmlDocuments: HasMany<typeof HtmlDocument>
}
