import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');
const patientRoutes = require('./routes/patients');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use('/api/patients/', patientRoutes);
app.use('/api/user/', userRoutes);

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected, port', process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
