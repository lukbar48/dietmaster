import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SortTermType } from 'pages/Main';
import { PatientType } from 'types/types';
import { restClient } from '../helpers/axiosInit';

const initialState: PatientType[] = [];

export const fetchPatients = createAsyncThunk('/patients/getPatientsList', async () => {
  try {
    const response = await restClient.get('/patients');
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchSinglePatient = createAsyncThunk('patient/getPatient', async (id: string) => {
  try {
    const response = await restClient.get(`/patients/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const addNewPatient = createAsyncThunk('patients/addPatient', async (patient?: Partial<PatientType>) => {
  try {
    const response = await restClient.post('/patients', patient);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const removePatient = createAsyncThunk('patients/removePatient', async (id: string) => {
  try {
    const response = await restClient.delete(`/patients/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const filterPatientsList = createAsyncThunk('patients/filterPatients', async (query: { searchTerm: string; sortTerm: SortTermType }) => {
  const searchParams = new URLSearchParams({
    text: query.searchTerm,
    sort: query.sortTerm,
  });
  try {
    const response = await restClient.get(`/patients/search?${searchParams}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const patientsListSlice = createSlice({
  name: 'patientsList',
  initialState,
  reducers: {
    updatePatientsList(state, action) {
      const patientsList = state.filter((patient) => patient._id !== action.payload._id);
      return [action.payload, ...patientsList];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removePatient.fulfilled, (state, action) => {
      return state.filter((patient) => patient._id !== action.payload._id);
    });
    builder.addCase(addNewPatient.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(filterPatientsList.fulfilled, (state, action) => {
      return action.payload || [];
    });
  },
});

export default patientsListSlice.reducer;

export const { updatePatientsList } = patientsListSlice.actions;
