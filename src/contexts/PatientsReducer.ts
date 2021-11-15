import patients from 'data/data';
import { PatientState } from '../data/data';

type ACTIONTYPES =
  | { type: 'DELETE_PATIENT'; payload: number }
  | { type: 'SORT_PATIENTS_LIST'; payload: string }
  | { type: 'ADD_PATIENT'; payload: PatientState }
  | { type: 'SEARCH_IN_LIST'; payload: string }
  | { type: 'ADD_PATIENTS_LIST'; payload: PatientState[] };

function PatientsReducer(state: typeof patients, action: ACTIONTYPES) {
  switch (action.type) {
    case 'DELETE_PATIENT': {
      const deletePatientsList = state.filter((patient) => patient.id !== action.payload);
      return deletePatientsList;
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
        }
      });
      return [...sortedList];
    }
    case 'SEARCH_IN_LIST': {
      const searchInList = state.filter((patient) => {
        return patient.name.includes(action.payload) || patient.surname.includes(action.payload);
      });
      return searchInList;
    }
    case 'ADD_PATIENTS_LIST': {
      return action.payload;
    }

    default:
      throw new Error('wrong operation');
  }
}

export default PatientsReducer;
