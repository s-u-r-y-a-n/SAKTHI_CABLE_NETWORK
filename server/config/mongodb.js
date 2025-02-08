import mongoose from "mongoose";
import AdminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";

const connectDb = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL;
        if (!mongoUrl) {
            console.error('MONGODB_URL is undefined');
            return;   
        }
        console.log('Connecting to MongoDB:', mongoUrl);
        await mongoose.connect(mongoUrl);

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            console.error("Admin credentials are not set in environment variables!");
            return;
        }

        const existingAdmin = await AdminModel.findOne({ email: adminEmail });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash(adminPassword, 10);
            const admin = new AdminModel({
                email: adminEmail,
                password: hashedPassword,
            });
            await admin.save();
            console.log("Admin user created!");
        } else {
            console.log("Admin user already exists.");
        }

    } catch (error) {
        console.error("Surya, there is an error in MongoDB.JS", error.message);
    }
};

export default connectDb;
