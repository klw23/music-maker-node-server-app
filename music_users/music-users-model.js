import mongoose from "mongoose";
import usersSchema from "./music-users-schema.js";

const usersModel = mongoose.model('UserModel', usersSchema)

export default usersModel