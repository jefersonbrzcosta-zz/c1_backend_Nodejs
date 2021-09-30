import { Router } from 'express'
import { createAssessment } from '../services/assessment'

const assessmentRoutes = Router()

assessmentRoutes.post('/assessment/create', createAssessment)

// todo: add route for assessment answer
assessmentRoutes.post('/assessment/:assessmentId/answer', async () => {})

// todo: add route for assessment end
assessmentRoutes.post('/assessment/:assessmentId/end', async () => {})

export default assessmentRoutes
