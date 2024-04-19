import { connectToDB } from "../config/mongoose";
import Admin from "../models/admin";
export async function checkPassword (password) { 
    connectToDB();
    const admin = await Admin.find({password});
    if(admin){
        return true;
    }else{
        return false;
    }
}