import mongoose from 'mongoose'

const db_connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.lnvro.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
    )
    console.log('Connected to the Database')
  } catch (error) {
    console.error(error)
  }
}

export default db_connection
