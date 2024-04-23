import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import myUserRoute from "./routes/MyUserRoutes";
import myRestaurantRoute from "./routes/MyRestaurantRoutes";
import {v2 as cloudinary} from "cloudinary";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"))
  .catch((e) => console.error("Error connecting to database", e));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret : process.env.CLOUDINARY_API_SECRET,
})

const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Define CORS options
const corsOptions: cors.CorsOptions = {
  origin: "*", // Allow requests from any origin (you may want to restrict this in production)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specified HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specified headers
};

// Use CORS with options
app.use(cors(corsOptions));

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute)

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
