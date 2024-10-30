const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({
      username,
      email,
      password
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Error creating user' });
  }
};
