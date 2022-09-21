import axios from 'axios';
import { InitialPatientType } from 'types/interfaces';

export const fetchPatients = async () => {
  const response = await axios.get('/api/patients');
  return response.data;
};

export const fetchSinglePatient = async (id: string) => {
  const response = await axios.get(`/api/patients/${id}`);
  return response.data;
};

export const addNewPatient = async (data: Partial<InitialPatientType>) => {
  const response = await axios.post('/api/patients', data);
  return response.data;
};

export const editPatient = async (id: string, data: Partial<InitialPatientType>) => {
  const response = await axios.patch(`/api/patients/${id}`, data);
  return response.data;
};

export const deletePatient = async (id: string) => {
  const response = await axios.delete(`/api/patients/${id}`);
  return response.data;
};
