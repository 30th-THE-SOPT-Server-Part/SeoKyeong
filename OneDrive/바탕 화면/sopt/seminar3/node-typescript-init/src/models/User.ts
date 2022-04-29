import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserShema = new mongoose.Schema({
    name: {
        type: String,
        required: true    // null이면 안됨
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true    // 고유하다
    },
    age: {
        type: String
    },
    school: {
        name: { type: String }, 
        major: { type: String }
    }
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserShema);