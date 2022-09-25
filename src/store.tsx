import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { InitialPatientType } from 'types/interfaces';

const initialState: InitialPatientType[] = [];

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

export const addNewPatient = createAsyncThunk('patients/addPatient', async (patient: InitialPatientType) => {
  try {
    const response = await axios.post('http://localhost:4000/api/patients', patient);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const updatePatient = createAsyncThunk('patients/updatePatient', async (patientData: Partial<InitialPatientType>) => {
  try {
    const response = await axios.patch('/api/patients', patientData);
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

const patientsListSlice = createSlice({
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
  },
  extraReducers(builder) {
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updatePatient.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removePatient.fulfilled, (state, action) => {
      return state.filter((patient) => patient._id !== action.payload.id);
    });
  },
});

export const { sortPatientsList } = patientsListSlice.actions;

export const store = configureStore({
  reducer: {
    patientsList: patientsListSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
