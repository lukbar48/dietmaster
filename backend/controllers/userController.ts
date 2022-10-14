const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (id) => jwt.sign({ _id: id }, process.env.JWT_SECRET, { expiresIn: '10d' });

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    await User.register(email, password);
    res.status(200).json({ email });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};

export {};
