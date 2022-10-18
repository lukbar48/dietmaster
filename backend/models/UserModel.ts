import { Model, Schema, model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

interface User {
  email: string;
  password: string;
  _id: string;
}

interface UserStatics extends Model<User> {
  register: (email: string, password: string) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
}

const userSchema = new Schema<User, UserStatics>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.register = async function (email: string, password: string) {
  if (!email || !password) throw Error('All fields are required');

  if (!validator.isEmail(email)) throw Error('Email must be valid');
  if (password.length < 4) throw Error('Password must be at least 4 characters long');

  const foundUser = await this.findOne({ email });

  if (foundUser) throw Error(`Email ${foundUser.email} already exists`);

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = this.create({ email, password: hash });

  return newUser;
};

userSchema.statics.login = async function (email: string, password: string) {
  if (!email || !password) throw Error('All fields are required');

  const foundUser = await this.findOne({ email });
  if (!foundUser) throw Error('Incorrect email');

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) throw Error('Incorrect password');

  return foundUser;
};

const UserModel = model<User, UserStatics>('User', userSchema);
export default UserModel;
