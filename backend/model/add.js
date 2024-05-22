import mongoose from 'mongoose';

const Schema = new mongoose.Schema({ 

    name: { type: String, required: true },
    email: { type: String, required: true }, 
    classes: { type: String, required: true },

}, { timestamps: true });

export const kidSchema = mongoose.model('kid', Schema);
