import { DateTime } from 'luxon'

import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import ExtractionRecord from './extraction_record.js'

export default class ExtractionPattern extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare userId: number

  @column()
  declare name: string

  @column()
  declare json: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => ExtractionRecord)
  declare extractionRecords: HasMany<typeof ExtractionRecord>
}
