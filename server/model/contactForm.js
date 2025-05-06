import mongoose from "mongoose";

const formSchema= mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    contactNumber:{
        type: Number,
        require:true,
    },
    mail:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true,
    }
})

const formModel= new mongoose.model("contactForm", formSchema);

export default formModel;