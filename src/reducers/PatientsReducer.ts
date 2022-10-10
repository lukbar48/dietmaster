import { PatientType } from 'types/types';

type ACTIONTYPES =
  | { type: 'DELETE_PATIENT'; payload: PatientType }
  | { type: 'SORT_PATIENTS_LIST'; payload: string }
  | { type: 'ADD_PATIENT'; payload: PatientType }
  | { type: 'SEARCH_IN_LIST'; payload: string }
  | { type: 'ADD_PATIENTS_LIST'; payload: PatientType[] };

const PatientsReducer = (state: PatientType[], action: ACTIONTYPES) => {
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
          return a._id > b._id ? -1 : b._id > a._id ? 1 : 0;
        } else if (action.payload === 'a-z') {
          return a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : 0;
        } else if (action.payload === 'z-a') {
          return a.surname > b.surname ? -1 : b.surname > a.surname ? 1 : 0;
        } else {
          return a._id > b._id ? -1 : b._id > a._id ? 1 : 0;
        }
      });
      return sortedList;
    }
    case 'DELETE_PATIENT': {
      const deletePatientsList = state.filter((patient) => patient._id !== action.payload._id);
      return deletePatientsList;
    }
    default:
      throw new Error('wrong operation');
  }
};

export default PatientsReducer;
