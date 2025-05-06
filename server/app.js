import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT= process.env.PORT;
const app= express();

app.use(express.json());
app.use(cors());


app.listen(PORT, (err)=>{
    if(err) console.log(err);
    else console.log(`Server is running on ${PORT}..`);
})