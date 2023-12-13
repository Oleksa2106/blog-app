import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const user = mongoose.model('user', userShema);

export default user;