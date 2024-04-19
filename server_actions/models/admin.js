import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    password: {
        type: String,
        default: "admin@123"
    }
  });

  const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

  export default Admin;