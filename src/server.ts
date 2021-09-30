require('dotenv').config()
import express from 'express'
import db_connection from './database'
import assessmentRoutes from './routes/assessment'
import questionRoutes from './routes/question'

const app = express()
app.use(express.json())

app.use(assessmentRoutes)
app.use(questionRoutes)

const PORT = 3000
app.listen(PORT, async () => {
  db_connection()
  console.log(`App listening on port ${PORT}`)
})
