//import mongoose
import mongoose from "mongoose";


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
export const Comment = mongoose.model("Comment", commentSchema);