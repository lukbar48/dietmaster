import express from 'express';
import { addNewPatient, deletePatient, filterPatients, getAllPatients, getSinglePatient, updatePatient } from '../controllers/patientsController';
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

router.use(requireAuth);

router.get('/search', filterPatients);

router.get('/', getAllPatients);

router.get('/:id', getSinglePatient);

router.post('/', addNewPatient);

router.delete('/:id', deletePatient);

router.patch('/:id', updatePatient);

export default router;
