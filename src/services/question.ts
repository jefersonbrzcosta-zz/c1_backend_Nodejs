import { Request, Response } from 'express'
import { getSeconds } from '../helpers'
import Questions from '../database/models/question'
import Assessments from '../database/models/assessment'

export async function getQuestion(request: Request, response: Response) {
  const { questionId, assessmentId } = request.params
  const question = await Questions.findOne({
    QuestionType: Number(questionId),
  })
  if (!question)
    return response.status(404).json({ error: 'Question Not Found' })

  const assessment = await Assessments.findOne({
    Gkey: assessmentId,
  })
  if (!assessment)
    return response.status(404).json({ error: 'Assessment Not Found' })

  const RemainingSeconds = getSeconds(String(assessment.CreatedAt))
  return response.status(201).json({
    ...question._doc,
    RemainingSeconds,
  })
}
