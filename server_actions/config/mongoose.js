import mongoose from "mongoose";

let isConnected = false;    // to track connection status

export const connectToDB = async () => {

    // if(!process.env.MONGODB_URI) return console.log("MONGODB_URI is not defined")

    if(isConnected){
        // return console.log("+> using existing database connection");
    } 

    try {
       await mongoose.connect(process.env.MONGODBURL);

       isConnected = true

       console.log("MONGODB connected")


    } catch (error) {
        console.log(error)
    }
}