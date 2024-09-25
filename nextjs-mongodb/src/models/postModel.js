import { Schema,model,models } from "mongoose";

const postSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    phoneNumber:{
        type: Number,
        require:true
    },
    dateOfBirth:{
        type: Date,
        require:true
    }
},{timestamps:true})

const PostModel = models.post || model('post',postSchema)

export default PostModel