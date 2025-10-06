import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  console.log("Loaded URI:", process.env.MONGOOSE_URI);
  try {
     await mongoose.connect(process.env.MONGOOSE_URI)
     console.log('Successfully connected👍')
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB