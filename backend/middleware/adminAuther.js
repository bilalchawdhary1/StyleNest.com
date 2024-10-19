import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        // Extract token from the 'Authorization' header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Please Login Again.' });
        }

        // Extract the actual token
        const token = authHeader.split(' ')[1];

        // Verify the token using the secret
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the verified token contains the correct admin email or role
        if (verified.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: 'Not Authorized. Admin Access Required.' });
        }

        // Attach verified user to the request object
        req.user = verified;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error in adminAuth middleware:", error);
        return res.status(401).json({ success: false, message: 'Not Authorized. Invalid or Expired Token.' });
    }
};

export default adminAuth;

// import jwt from 'jsonwebtoken'
// // Middleware to verify JWT token

// const adminAuth = async (req, res, next) => {
//     try {
//         const {token } = req.headers
//         if (!token) {
//             return res.json({ success: false , message: 'Not Authorrized Login Try Again' });
//         }
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         if(verified !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
//             return res.json({ success: false , message: 'Not Authorrized Login Try Again' });
//         }
//         next()
//         // If token is valid, add user to request for future middleware
//         req.user = verified;

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false , message: 'Not Authorrized Login Try Again' });
//     }
// };

// export default adminAuth;