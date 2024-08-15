import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {
  /**
   * Get a list of all users.
   */
  async index({ response }: HttpContext) {
    try {
      const users = await User.all()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch users' })
    }
  }

  /**
   * Handle form submission to create a new user.
   */
  async store({ request, response }: HttpContext) {
    try {
      const userData = request.only(['fullName', 'email', 'password'])
      const user = await User.create(userData)
      return response.status(201).json(user)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to create user' })
    }
  }

  /**
   * Display a single user by id.
   */
  async show({ params, response }: HttpContext) {
    try {
      const user = await User.findOrFail(params.id)
      return response.status(200).json(user)
    } catch (error) {
      return response.status(404).json({ error: 'User not found' })
    }
  }

  /**
   * Handle the form submission to update a specific user by id.
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const user = await User.findOrFail(params.id)
      const updatedData = request.only(['fullName', 'email', 'password'])
      user.merge(updatedData)
      await user.save()
      return response.status(200).json(user)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to update user' })
    }
  }

  /**
   * Handle the form submission to delete a specific user by id.
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()
      return response.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      return response.status(500).json({ error: 'Failed to delete user' })
    }
  }
}
