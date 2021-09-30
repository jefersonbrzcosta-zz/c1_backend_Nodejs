import { Request, Response } from 'express'
import Assessments from '../database/models/assessment'

export async function createAssessment(request: Request, response: Response) {
  try {
    const { name, surname, email } = request.body
    const assessment = await Assessments.create({
      TakerName: name,
      TakerSurname: surname,
      TakerEmail: email,
    })
    return response.status(201).json(assessment)
  } catch (error: any) {
    return response.status(400).json({ error: error.message })
  }
}
