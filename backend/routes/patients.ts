import express from 'express';
import requireAuth from '../middleware/requireAuth';
import { getAllPatients, getSinglePatient, addNewPatient, deletePatient, updatePatient, filterPatients } from '../controllers/patientsController';

const router = express.Router();

router.use(requireAuth);

router.get('/search', filterPatients);

router.get('/', getAllPatients);

router.get('/:id', getSinglePatient);

router.post('/', addNewPatient);

router.delete('/:id', deletePatient);

router.patch('/:id', updatePatient);

export default router;

export {};
