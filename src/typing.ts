import mongoose from 'mongoose'

export interface UserInput {
  TakerId: String
  TakerName: String
  TakerSurname: String
  TakerEmail: String
}

interface Iquestion {
  CategoryName: String
  QuestionCount: Number
  Correct: Number
  Incorrect: Number
  Empty: Number
  TotalScore: Number
}

export interface Iassessments extends UserInput, mongoose.Document {
  Gkey: String
  QuestionCount: Number
  CorrectTotalScore: Number
  EmptyAnswers: Number
  CorrectAnswers: Number
  InCorrectAnswers: Number
  TimeTaken: String
  StartDate: Date
  EndDate: Date
  CreatedAt: Date
  Categories: Array<Iquestion>
}

interface IOptions {
  CategoryName: String
  QuestionType: Number
  Text: Number
}

export interface IQuestionFull extends mongoose.Document {
  _doc?: any
  CategoryName: String
  QuestionType: Number
  Text: Number
  Options: Array<IOptions>
}

export interface IUserInfo {
  name: String
  surname: String
  email: String
}
