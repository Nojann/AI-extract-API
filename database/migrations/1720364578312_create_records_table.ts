import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'records'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .integer('extraction_record_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('extraction_records')
        .onDelete('CASCADE')
      table.text('json').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
