import AdminModel from "../models/adminModel";

// Function to get the admin
export const getAdminData = async (req, res) => {
    try {
        const { adminId } = req.body;
        const admin = await AdminModel.findById(adminId);
        if (!admin) {
            return res.json({ success: false, message: "Admin not found" });
        }
        res.json({
            success: true,
        });

    } catch (error) {
        res.json({ success: false, message: `Surya, there is an error in adminController.js file, ${error.message}` });
    }
}