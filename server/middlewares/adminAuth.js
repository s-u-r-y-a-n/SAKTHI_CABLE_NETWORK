import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.body.adminId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Surya, there is an error in adminAuth.js file", error: error.message });
    }
}

export default adminAuth;

