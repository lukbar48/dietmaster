const express = require('express');
const app = express();
const patientsRoutes = require('../backend/routes/patients');

const port = 4000;
app.listen(port, () => {
  console.log('listening on port');
});

app.get('/', (req, res) => {
  res.json({ name: 'Jon' });
});
