// import mongoose from "mongoose";

// const connectToMongoDB = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGO_DB_URI);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.log("Error connecting to MongoDB", error.message);
// 	}
// };

// export default connectToMongoDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

const connectToMongoDB = async () => {
	

dotenv.config();
// app.use(cors());

// const uri = 'mongodb://127.0.0.1:27017/Chat-app';

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
};

export default connectToMongoDB;


