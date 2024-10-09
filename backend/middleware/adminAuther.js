import jwt from 'jsonwebtoken'
// Middleware to verify JWT token

const adminAuth = async (req, res, next) => {
    try {
        const {token } = req.headers
        if (!token) {
            return res.json({ success: false , message: 'Not Authorrized Login Try Again' });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(verified !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({ success: false , message: 'Not Authorrized Login Try Again' });
        }
        next()
        // If token is valid, add user to request for future middleware
        req.user = verified;

    } catch (error) {
        console.log(error);
        res.json({ success: false , message: 'Not Authorrized Login Try Again' });
    }
};

export default adminAuth;