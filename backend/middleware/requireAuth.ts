import { NextFunction, Request, Response } from 'express';

const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Authorization error' });

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Request is not authorized' });
  }
};

export default requireAuth;
