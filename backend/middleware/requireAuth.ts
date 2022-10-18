import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../models/UserModel';

interface JwtPayload {
  _id: string;
}

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Authorization error' });

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET || '') as JwtPayload;
    const user = await User.findOne({ _id }).select('_id');
    if (user) req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Request is not authorized' });
  }
};

export default requireAuth;
