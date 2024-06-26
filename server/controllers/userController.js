const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authMiddleware, signToken } = require('../utils/authMiddleware');


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.login = async (req, res) => {
    try {
        console.log('Login request body:', req.body);

        const { email, password } = req.body;
        console.log('Login request received. Email:', email);

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        const isPasswordValid = await user.isCorrectPassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        //Generate JWT Token
        const token = signToken(user);
        console.log('Token generated:', token);

        return res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();

        return res.status(201).json({ message: 'User created succesffully', user: newUser });
    } catch (error) {
        console.error('Erorr during sign-up:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};