import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import AdminModel from "../models/adminModel.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Login Function
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: "Both Email & Password are required!" });
    }

    try {
        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            return res.json({ success: false, message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.json({ success: true });

    } catch (error) {
        return res.json({ success: false, message: `Surya, there is an error in authController.js in login function ${error.message}` })
    }
}
