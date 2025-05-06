import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import  connectDB from "./config/db.js";
import router from "./routes/routes.js";

dotenv.config();

const PORT= process.env.PORT;
const app= express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

connectDB().then( ()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else console.log(`Server is running on ${PORT}..`);
    })
})


