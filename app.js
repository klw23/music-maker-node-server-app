import express from 'express'
import cors from 'cors'
import session from 'express-session'
import UsersController from "./music_users/music-users-controller.js";
import SessionController from "./session-controller.js";

import mongoose from "mongoose";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/music-maker-node-app', options)

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())

UsersController(app)
SessionController(app)


app.listen(4000)