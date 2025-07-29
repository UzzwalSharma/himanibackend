import { timeStamp } from "console";
import mongoose, { Document } from "mongoose";

export interface IRestaurant{
    user: mongoose.Schema.Types.ObjectId;
    restaurantName:string;
    city:string;
    country:string;
    deliveryTime:number;
    cuisines:string[];
    imageUrl:string;
    menus:mongoose.Schema.Types.ObjectId[]
}
export interface IRestaurantDocuments extends IRestaurant,Document{
    createdAt:Date;
    updatedAt:Date;
}
const restaurantSchema=new mongoose.Schema<IRestaurantDocuments>({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    restaurantName:{
        type:String,
        required:true
    },
    city:{
        type:String,
        default:"enter your city name"
    },
    country:{
        type:String,
        default:"enter your country name"
    },
    deliveryTime:{
        type:Number,
        required:true
    },
    cuisines:[{
        type:String,
        required:true
    }],
    imageUrl:{
        type:String,
        required:true
    },
    menus:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Menu'
        }
    ],
},{timestamps:true});
export const Restaurant=mongoose.model("Restaurant",restaurantSchema);