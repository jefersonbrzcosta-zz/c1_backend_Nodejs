import mongoose from 'mongoose'
import { v4 as uuid } from 'uuid'
import { Iassessments } from '../../typing'

const QuestionSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    default: null,
  },
  QuestionCount: {
    type: Number,
    default: 0,
  },
  Correct: {
    type: Number,
    default: 0,
  },
  Incorrect: {
    type: Number,
    default: 0,
  },
  Empty: {
    type: Number,
    default: 0,
  },
  TotalScore: {
    type: Number,
    default: 0,
  },
})

const AssessmentsSchema = new mongoose.Schema({
  Gkey: {
    type: String,
    default: uuid(),
  },
  TakerId: {
    type: String,
    default: Math.floor(Math.random() * 90000) + 10000,
  },
  TakerName: {
    type: String,
    required: true,
  },
  TakerSurname: {
    type: String,
    required: true,
  },
  TakerEmail: {
    type: String,
    required: true,
  },
  QuestionCount: {
    type: Number,
    default: 0,
  },
  CorrectTotalScore: {
    type: Number,
    default: 0,
  },
  EmptyAnswers: {
    type: Number,
    default: 0,
  },
  CorrectAnswers: {
    type: Number,
    default: 0,
  },
  InCorrectAnswers: {
    type: Number,
    default: 0,
  },
  TimeTaken: {
    type: String,
    default: null,
  },
  StartDate: Date,
  EndDate: {
    type: Date,
    default: null,
  },
  CreatedAt: {
    type: Date,
    default: new Date(),
  },
  Categories: [QuestionSchema],
})

export default mongoose.model<Iassessments>('Assessments', AssessmentsSchema)
