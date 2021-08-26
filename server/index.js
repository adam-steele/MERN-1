import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import recipeRoutes from "./routes/recipes.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({limit: "30mb", extended:true}));


app.use('/recipes', recipeRoutes);
app.use('/user', userRoutes);



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);

