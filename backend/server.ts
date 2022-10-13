require('dotenv').config();
const express = require('express');
const app = express();
const patientRoutes = require('./routes/patients');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use('/api/patients/', patientRoutes);
app.use('/api/user/', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected, port', process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
