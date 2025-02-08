import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: './.env' });  
connectDb();
const app = express();  
app.use(cookieParser());
const port = process.env.PORT || 6000;
const allowedOrigins = ["http://localhost:5173", "https://suryamernstack.netlify.app"];
   
//Middlewares
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());

//API Endpoints
app.get("/home", (req, res) => {
    res.send("Welcome to the home page")
});

app.use("/api/auth", authRouter);

//Server running port
const server = app.listen(port, () => {
    console.log(`Surya, Your server is running on PORT: ${port}`);      
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is in use. Trying a new port...`);
        app.listen(6001, () => {
            console.log(`Server running on new port 6001`);
        });
    }
});