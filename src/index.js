import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error occurred:", error);
      throw error; // Rethrow the error to stop the server
    });

    // Start the server after successful connection to MongoDB
    aap.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("MongoDB connected!!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  });


  



  

// import express from "express";
// const app = express();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.error("Error occurred:", error);
//             throw error; // Rethrow the error to stop the server
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error; // Rethrow the error after logging it
//     }
// })()
