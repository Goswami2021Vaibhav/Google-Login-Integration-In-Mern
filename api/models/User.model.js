import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
    },
    avatar: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const User = mongoose.model('User', UserSchema, 'users')
export default User