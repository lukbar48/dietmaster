require('dotenv').config();
const express = require('express');
const app = express();
const patientRoutes = require('./routes/patients');
const mongoose = require('mongoose');
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
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
