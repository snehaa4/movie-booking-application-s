import express from "express";
import userRouter from "./routes/user-routes";
//import mongoose from "mongoose";
//const app = express();
//import dotenv from 'dotenv'
//const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

//middlewares
app.use("/user", userRouter)
app.use(express.json());


mongoose.connect(`mongodb+srv://ansgupta01:${process.env.MONGODB_PASSWORD}@anshika-project.0bdpjx2.mongodb.net /
`)
    .then(() => app.listen(3000, () => console.log("Connected successfully")
    )
    ).catch(e => console.log(e));


