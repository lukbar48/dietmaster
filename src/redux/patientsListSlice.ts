import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PatientType } from 'types/types';

const initialState: PatientType[] = [];

export const fetchPatients = createAsyncThunk('/patients/getPatients', async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/patients');
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchSinglePatient = createAsyncThunk('patient/getPatient', async (id: string) => {
  try {
    const response = await axios.get(`/api/patients/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const addNewPatient = createAsyncThunk('patients/addPatient', async (patient?: Partial<PatientType>) => {
  try {
    const response = await axios.post('http://localhost:4000/api/patients', patient);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const removePatient = createAsyncThunk('patients/removePatient', async (id: string) => {
  try {
    const response = await axios.delete(`/api/patients/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchFilteredPatients = createAsyncThunk('patients/filterPatients', async (query: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/patients/search?q=${query}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const patientsListSlice = createSlice({
  name: 'patientsList',
  initialState,
  reducers: {
    sortPatientsList(state, action) {
      return state.sort((a, b): any => {
        if (action.payload === 'female') return a.sex > b.sex ? 1 : b.sex > a.sex ? -1 : 0;
        if (action.payload === 'male') return a.sex > b.sex ? -1 : b.sex > a.sex ? 1 : 0;
        if (action.payload === 'off') return a._id > b._id ? -1 : b._id > a._id ? 1 : 0;
        if (action.payload === 'a-z') return a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : 0;
        if (action.payload === 'z-a') return a.surname > b.surname ? -1 : b.surname > a.surname ? 1 : 0;
        return a._id > b._id ? -1 : b._id > a._id ? 1 : 0;
      });
    },
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
    builder.addCase(fetchFilteredPatients.fulfilled, (state, action) => {
      return action.payload || [];
    });
  },
});

export default patientsListSlice.reducer;

export const { sortPatientsList, updatePatientsList } = patientsListSlice.actions;
