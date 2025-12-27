import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed");
    console.error(error.message);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDb;


// export default connectDb;