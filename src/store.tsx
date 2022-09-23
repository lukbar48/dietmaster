import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from 'mocks/db';
import axios from 'axios';
import { InitialPatientType } from 'types/interfaces';

const initialState: InitialPatientType[] = [];

export const fetchPatients = createAsyncThunk('patients/getPatients', async () => {
  try {
    const response = await axios.get('/api/patients');
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

let patientFound = false;
export const addNewPatient = createAsyncThunk('patients/addPatient', async (patient: InitialPatientType) => {
  patientFound = false;
  const findPatient = db.patient.findFirst({
    where: {
      id: {
        equals: patient.id,
      },
    },
  });
  if (!findPatient) {
    try {
      const response = await axios.post('/api/patients/add', patient);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  } else if (findPatient) {
    patientFound = true;
    try {
      const response = await axios.put('/api/patients/add', patient);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});

export const removePatient = createAsyncThunk('patients/removePatient', async (patient: string) => {
  const findPatient = db.patient.findFirst({
    where: {
      id: {
        equals: +patient,
      },
    },
  });
  if (findPatient) {
    try {
      const response = await axios.delete('/api/patients', { data: findPatient });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});

const patientsListSlice = createSlice({
  name: 'patientsList',
  initialState,
  reducers: {
    sortPatientsList(state, action) {
      return state.sort((a, b): any => {
        if (action.payload === 'female') return a.sex > b.sex ? 1 : b.sex > a.sex ? -1 : 0;
        if (action.payload === 'male') return a.sex > b.sex ? -1 : b.sex > a.sex ? 1 : 0;
        if (action.payload === 'off') return a.id > b.id ? -1 : b.id > a.id ? 1 : 0;
        if (action.payload === 'a-z') return a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : 0;
        if (action.payload === 'z-a') return a.surname > b.surname ? -1 : b.surname > a.surname ? 1 : 0;
        return a.id > b.id ? -1 : b.id > a.id ? 1 : 0;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewPatient.fulfilled, (state, action) => {
      if (!patientFound) {
        state.push(action.payload);
      } else if (patientFound) {
        const findIndex = state.findIndex((patient) => patient.id === action.payload.id);
        state[findIndex] = action.payload;
      }
    });
    builder.addCase(removePatient.fulfilled, (state, action) => {
      return state.filter((patient) => patient.id !== action.payload.removedPatient.id);
    });
  },
});

export const { sortPatientsList } = patientsListSlice.actions;

export const store = configureStore({
  reducer: {
    patientsList: patientsListSlice.reducer,
  },
});
