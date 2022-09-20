const express = require('express');
const router = express.Router();
const { getAllPatients, getSinglePatient, addNewPatient, deletePatient, updatePatient } = require('../controllers/patientsController');

router.get('/', getAllPatients);

router.get('/:id', getSinglePatient);

router.post('/', addNewPatient);

router.delete('/:id', deletePatient);

router.patch('/:id', updatePatient);

module.exports = router;

export {};
