import patients from 'data/data';
import { PatientState } from '../data/data';

type ACTIONTYPES =
  | { type: 'ADD_PATIENTS_LIST'; payload: PatientState[] }
  | { type: 'ADD_PATIENT'; payload: PatientState }
  | { type: 'SORT_PATIENTS_LIST'; payload: string }
  | { type: 'SEARCH_IN_LIST'; payload: string };

function PatientsReducer(state: typeof patients, action: ACTIONTYPES) {
  switch (action.type) {
    case 'ADD_PATIENTS_LIST': {
      return action.payload;
    }
    case 'ADD_PATIENT': {
      const newPatient = action.payload;
      return [newPatient, ...state];
    }
    case 'SORT_PATIENTS_LIST': {
      const sortedList = state.sort((a, b): any => {
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
      return [...sortedList];
    }

    default:
      throw new Error('wrong operation');
  }
}

export default PatientsReducer;
