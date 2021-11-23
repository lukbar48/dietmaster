import { createSlice, configureStore } from '@reduxjs/toolkit';
import { db } from 'mocks/db';
import axios from 'axios';

const initialPatient = {
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
};

const initialState: typeof initialPatient[] = [];

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    getPatientsList(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        state.push(action.payload[i]);
      }
    },
    addPatient(state, action) {
      const findPatient = db.patient.findFirst({
        where: {
          id: {
            equals: Number(action.payload.id),
          },
        },
      });
      if (!findPatient) {
        axios
          .post(`/dietmaster/add`, action.payload)
          .catch((err) => console.log(err));
      } else if (findPatient) {
        axios
          .put(`/dietmaster/add`, action.payload)
          .catch((err) => console.log(err));
        }
        return state.filter((patient) => patient.id !== action.payload.id)
    },
    addPatientState(state,action) {
      state.unshift(action.payload)
    },
    removePatient(state, action) {
      const findPatient = db.patient.findFirst({
        where: {
          id: {
            equals: Number(action.payload),
          },
        },
      });
      if (findPatient) {
        axios
          .delete('/dietmaster', { data: findPatient })
          .catch((err) => console.log(err));
        }
        return state.filter((patient) => patient.id !== action.payload)
    },
    sortPatientsList(state, action) {
      // eslint-disable-next-line array-callback-return
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

export const { addPatient, addPatientState, removePatient, getPatientsList, sortPatientsList } = patientsSlice.actions;
export const selectPatients = (state: any) => state.patients;

export const store = configureStore({
  reducer: {
    patients: patientsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
