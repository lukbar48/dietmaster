import { configureStore } from '@reduxjs/toolkit';
import patientsListSlice from 'redux/patientsSlice';
import singlePatientSlice from 'redux/singlePatientSlice';

export const store = configureStore({
  reducer: {
    patientsList: patientsListSlice,
    patient: singlePatientSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
