import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
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
  CPM: '0',
  protein: '5',
  fat: '15',
  carbs: '10',
  allergens: [],
  preferences: [],
  diseases: [],
};

const initialState: typeof initialPatient[] = [];

export const fetchPatients = createAsyncThunk('patients/getPatients', async () => {
  try {
    const response = await axios.get('/dietmaster');
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

let patientFound = false;
export const addNewPatient = createAsyncThunk('patients/addPatient', async (patient: typeof initialPatient) => {
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
      const response = await axios.post('/dietmaster/add', patient);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  } else if (findPatient) {
    patientFound = true;
    try {
      const response = await axios.put('/dietmaster/add', patient);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});

export const removePatient = createAsyncThunk('patients/removePatient', async (patient: any) => {
  const findPatient = db.patient.findFirst({
    where: {
      id: {
        equals: patient,
      },
    },
  });
  if (findPatient) {
    try {
      const response = await axios.delete('/dietmaster', { data: findPatient });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
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
    builder.addCase(addNewPatient.rejected, (state, action) => {
      console.log('rejected');
    });
    builder.addCase(removePatient.fulfilled, (state, action) => {
      return state.filter((patient) => patient.id !== action.payload.removedPatient.id);
    });
  },
});

export const { sortPatientsList } = patientsSlice.actions;

export const store = configureStore({
  reducer: {
    patients: patientsSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

// export type RootState = ReturnType<typeof store.getState>;
