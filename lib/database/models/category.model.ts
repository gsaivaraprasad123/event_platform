import { Document, Schema } from "mongoose";

export interface ICategory extends Document{
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
    name:{type:String,required:true,unique:true}
})