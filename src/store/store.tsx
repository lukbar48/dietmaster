import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { db } from 'mocks/db';

const initialState = [
  {
    id: 0,
    name: '',
    surname: '',
    age: '',
    sex: 'Male',
    email: '',
    telephone: '',
    bodymass: '',
    height: '',
    notes: '',
    activity: '1.2',
  },
];

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    getPatientsList(state, action) {
      console.log('xxxx')
      console.log(action.payload)
      state.push(action.payload)
    },
    addPatient(state, action) {
      state.push(action.payload);
    },
    removePatient(state, action) {
      console.log(state)
      console.log(action.payload)
      return state.filter((patient) => patient.id !== action.payload);
    },
    sortPatientsList(state, action) {
      return state.sort((a, b): any => {
        if (action.payload === 'female') {
          return a.sex > b.sex ? 1 : b.sex > a.sex ? -1 : 0;
        } else if (action.payload === 'male') {
          return a.sex > b.sex ? -1 : b.sex > a.sex ? 1 : 0;
        } else if (action.payload === 'off') {
          return a.id > b.id ? -1 : b.id > a.id ? 1 : 0;
        } else if (action.payload === 'a-z') {
          return a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : 0;
        } else if (action.payload === 'z-a') {
          return a.surname > b.surname ? -1 : b.surname > a.surname ? 1 : 0;
        }
      });
    },
  },
});

export const { addPatient, removePatient, getPatientsList, sortPatientsList } = patientsSlice.actions;
export const selectPatients = (state: any) => state;

export const store = configureStore({
  reducer: {
    patients: patientsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>