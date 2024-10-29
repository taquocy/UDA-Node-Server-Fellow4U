const User = require('../models/userModel');

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.username = username;
    user.email = email;
    user.password = password;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Error updating user' });
  }
};

module.exports = { updateUser };
