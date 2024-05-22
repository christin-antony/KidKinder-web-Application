import mongoose from 'mongoose';

const Schema = new mongoose.Schema({ 
   

    classname:{ type: String, required: true },
    classimage:{ type: String, required: true },
    classsubject:{ type: String, required: true },


}, { timestamps: true });

export const classSchema = mongoose.model('class', Schema);