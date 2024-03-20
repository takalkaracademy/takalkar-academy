import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: String,
    mobile_no: Number,
    interest: {
        type: String,
        enum: ["jee", "neet", "mht-cet", '11-12']
    },
    query: String
  });

  const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);

  export default Enquiry;