const User = require('../models/UserModel');
const mongoose = require('mongoose');

const login = async (req, res) => {
  res.status(200).json({ msg: 'login successful' });
};

const register = async (req, res) => {
  res.status(200).json({ msg: 'register successful' });
};

module.exports = {
  login,
  register,
};

export {};
