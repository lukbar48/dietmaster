import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { InitialPatientType } from 'types/types';

export const initialState: InitialPatientType = {
  _id: '',
  name: '',
  surname: '',
  age: '',
  sex: '',
  email: '',
  telephone: '',
  bodymass: '',
  height: '',
  notes: '',
  activity: '',
  calories: '',
  protein: '',
  fat: '',
  carbs: '',
  allergens: [],
  preferences: [],
  diseases: [],
  tests: [],
  appointments: [],
};

export const fetchPatient = createAsyncThunk('patient/getPatient', async (id: string) => {
  try {
    const response = await axios.get(`/api/patients/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const updatePatient = createAsyncThunk('patient/updatePatient', async (patient: Partial<InitialPatientType>) => {
  try {
    const response = await axios.patch(`/api/patients/${patient._id}`, patient);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const singlePatientSlice = createSlice({
  name: 'singlePatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatient.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updatePatient.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default singlePatientSlice.reducer;
