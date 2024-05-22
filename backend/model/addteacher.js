import mongoose from 'mongoose';

const Schema = new mongoose.Schema({ 
   
    teachername:{ type: String, required: true },
    teacherimage:{ type: String, required: true },
    teachersubject:{ type: String, required: true },


}, { timestamps: true });

export const teachersSchema = mongoose.model('teachers', Schema);