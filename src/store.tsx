import { configureStore } from '@reduxjs/toolkit';
import patientsListSlice from 'redux/patientsListSlice';
import singlePatientSlice from 'redux/patientSlice';

export const store = configureStore({
  reducer: {
    patientsList: patientsListSlice,
    patient: singlePatientSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
