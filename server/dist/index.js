import bodyParser from "body-parser";
// import { config } from "dotenv";
import express from "express";
import { errorMiddleware } from "./middleware/error.js";
import AnimalRoutes from "./routes/animal.js";
import { connectDB } from "./utils/feature.js";
// config({
//     path: "./.env",
// })
// env constants 
const PORT = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI || "mongodb://0.0.0.0:27017/";
const app = express();
// app use 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// api routes 
app.use("/api/v1/animal", AnimalRoutes);
// connection to database 
connectDB(mongoURI);
// error middleware 
app.use(errorMiddleware);
// server 
app.listen(PORT, () => {
    console.log("Server is running at " + `${PORT}`);
});
