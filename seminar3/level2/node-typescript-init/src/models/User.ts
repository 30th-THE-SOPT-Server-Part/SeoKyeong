import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
    writer: {
        name: { type: String },
        nickname: { type: String }
    }, 
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Number,
        required: true
    }
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);