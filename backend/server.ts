require('dotenv').config();
const express = require('express');
const app = express();
const patientRoutes = require('./routes/patients');
const mongoose = require('mongoose');

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.json({ msg: 'elo' });
});

app.use('/api/patients/', patientRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
