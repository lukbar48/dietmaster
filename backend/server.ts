const express = require('express');
const app = express();
const patientsRoutes = require('./routes/patients');
const mongoose = require('mongoose');

const port = 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log('listening on port');
    });
  })
  .catch((err) => console.log(err));

app.use(app.express());
app.use('api/patients', patientsRoutes);
