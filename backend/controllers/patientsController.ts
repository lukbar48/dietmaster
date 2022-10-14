const Patient = require('../models/PatientsModel');
const mongoose = require('mongoose');

const getAllPatients = async (req, res) => {
  const user_id = req.user._id;
  const patients = await Patient.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(patients);
};

const getSinglePatient = async (req, res) => {
  const patient_id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(patient_id)) {
    return res.status(404).json({ error: 'No patient found, wrong id' });
  }

  const patient = await Patient.findById(patient_id);

  if (!patient) return res.status(404).json({ error: 'No patient found' });
  res.status(200).json(patient);
};

const addNewPatient = async (req, res) => {
  const user_id = req.user._id;
  const patientRequest = req.body;
  try {
    const patient = await Patient.create({ ...patientRequest, user_id });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePatient = async (req, res) => {
  const patient_id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(patient_id)) {
    return res.status(404).json({ error: 'No patient found, wrong id' });
  }
  const patient = await Patient.findOneAndDelete({ _id: patient_id });

  if (!patient) return res.status(404).json({ error: 'No patient found' });
  res.status(200).json(patient);
};

const updatePatient = async (req, res) => {
  const patient_id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(patient_id)) {
    return res.status(404).json({ error: 'No patient found, wrong id' });
  }
  const patient = await Patient.findOneAndUpdate({ _id: patient_id }, { ...req.body }, { returnDocument: 'after' });

  if (!patient) return res.status(404).json({ error: 'No patient found' });
  res.status(200).json(patient);
};

const filterPatients = async (req, res) => {
  const { text, sort } = req.query;
  const user_id = req.user._id;

  let patients = Patient.find({ user_id }).find({
    $or: [{ name: { $regex: text, $options: 'i' } }, { surname: { $regex: text, $options: 'i' } }],
  });

  switch (sort) {
    case 'off':
      patients = patients.sort({ createdAt: 1 });
      break;
    case 'asc':
      patients = patients.sort({ surname: 1 });
      break;
    case 'desc':
      patients = patients.sort({ surname: -1 });
      break;
    case 'male':
      patients = patients.sort({ sex: -1 });
      break;
    case 'female':
      patients = patients.sort({ sex: 1 });
      break;
    default:
      patients = patients.sort({ createdAt: -1 });
      break;
  }
  patients = await patients.exec();

  res.status(200).json(patients);
};

module.exports = {
  getAllPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
  addNewPatient,
  filterPatients,
};

export {};
