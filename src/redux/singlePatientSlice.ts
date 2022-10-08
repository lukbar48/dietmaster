import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { InitialPatientType } from 'types/types';

const initialState = {
  _id: '',
  name: '',
  surname: '',
  age: '',
  sex: 'Female',
  email: '',
  telephone: '',
  bodymass: '',
  height: '',
  notes: '',
  activity: '1.2',
  calories: '0',
  protein: '5',
  fat: '15',
  carbs: '10',
  allergens: [],
  preferences: [],
  diseases: [],
  tests: ['test1'],
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
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPatient.fulfilled, (state, action) => {
      // state = action.payload;
      return action.payload;
    });
    builder.addCase(updatePatient.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export default singlePatientSlice.reducer;
