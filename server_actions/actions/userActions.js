"use server"
import { connectToDB } from "../config/mongoose"
import Enquiry from "../models/enquiry"

export async function processSubmit(formData){
    // console.log(formData.get('interest'))
    connectToDB()
    const response = await Enquiry.create({
        name: formData.get('name'),
        mobile_no: formData.get('mobile_no'),
        interest: formData.get('interest'),
        query: formData.get('query'),
    })
    if(response){
        return({
            result: true,
            message: "Your Query is been recorded, we will soon contact you"
        })
    }else{
        return({
            result: false,
            message: "Unfortunately something went wrong, Please try again later"
        })
    }
}