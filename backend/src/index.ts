import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(()=> console.log("Connected to database!"))
  .catch((e)=>console.error("Error connecting to database", e))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async(req:Request, res: Response) => {
  res.json({message:"Hello"});
});

app.listen(7000, ()=> {
  console.log("Server started on port 5000")
})