const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ASDFGHJKLQWERTYUIOPZXCVBNM';

exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = User.register(username, password);
        console.log(newUser);
        res.json({ 
            message: 'User registered successfully', 
            user: newUser 
        });
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = User.findByUsername(username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user.user_id }, JWT_SECRET, { expiresIn: '1h' });
    console.log(user);
    res.json({ message: 'Login successful', token });
};
