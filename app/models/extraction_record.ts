import { DateTime } from 'luxon'

import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import ExtractionPattern from './extraction_pattern.js'
import Record from './record.js'

export default class ExtractionRecord extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare userId: number

  @column()
  declare extractionPatternId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => ExtractionPattern)
  declare extractionPattern: BelongsTo<typeof ExtractionPattern>

  @hasMany(() => Record)
  declare records: HasMany<typeof Record>
}
