// Route for user Login
const loginUser = async (req, res) => {
    // Logic for login user
    res.json({ message: 'User logged in successfully' });
    req.json({ message: 'User logged in successfully' });
 };
// Route for user SingUp
const singUpUser = async (req, res) => {
    // Logic for singing up user
    res.json({ message: 'User registered successfully' });
    req.json({ message: 'User registered successfully' });
};
// Route for admin login
const adminLogin = async (req, res) => {
    // Logic for admin login
    res.json({ message: 'Admin logged in successfully' });
    req.json({ message: 'Admin logged in successfully' });
};
export { loginUser, singUpUser, adminLogin };
