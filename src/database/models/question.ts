import mongoose from 'mongoose'
import { IQuestionFull } from '../../typing'

const OptionsSchema = new mongoose.Schema({
  Id: Number,
  QuestionId: Number,
  Text: String,
  Point: Number,
  IsCorrect: Boolean,
  IsAnswer: Boolean,
})

const QuestionSchema = new mongoose.Schema({
  CategoryName: String,
  QuestionType: Number,
  Text: Number,
  Options: [OptionsSchema],
})

export default mongoose.model<IQuestionFull>('Questions', QuestionSchema)
