const express = require('express');
var app = express();
const router = express.Router();
const PatientModel = require('../models/PatientsModel');

router.get('/', (req, res) => {
  res.json({ msg: 'get all patients' });
});

router.get('/:id', (req, res) => {
  res.json({ msg: 'get single patient' });
});

router.post('/', async (req, res) => {
  const patientRequest = req.body;
  try {
    const patient = await PatientModel.create(patientRequest);
    res.status(200).json(patient);
  } catch (error) {
    res.stats(400).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete single patient' });
});

router.patch('/:id', (req, res) => {
  res.json({ msg: 'update a workout' });
});

module.exports = router;
export {};
