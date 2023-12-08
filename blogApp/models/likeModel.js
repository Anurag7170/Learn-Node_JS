//import mongoose
import mongoose from "mongoose";


//route handler

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
});

//export
export const Like = mongoose.model("Like", likeSchema);