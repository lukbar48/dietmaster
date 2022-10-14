import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { restClient } from 'helpers/axiosInit';
import { PatientType } from 'types/types';

export const initialState: PatientType = {
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
    const response = await restClient.get(`/patients/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const updatePatient = createAsyncThunk('patient/updatePatient', async (patient: Partial<PatientType>) => {
  try {
    const response = await restClient.patch(`/patients/${patient._id}`, patient);
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
