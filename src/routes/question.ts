import { Router } from 'express'
import { getQuestion } from '../services/question'

const questionRoutes = Router()

questionRoutes.get(
  '/assessment/:assessmentId/question/:questionId',
  getQuestion
)

export default questionRoutes
