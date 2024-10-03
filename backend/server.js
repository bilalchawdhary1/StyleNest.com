import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodg.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

//  App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/user',userRouter)
app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
