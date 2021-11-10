import React, { useReducer, createContext, useEffect, useState, ReactNode, useContext } from 'react';
import patients from '../data/data';
import { PatientState } from '../data/data';

const InitialPatientValues = {
  id: 0,
  name: '',
  surname: '',
  age: '',
  sex: 'Male',
  email: '',
  telephone: '',
  bodymass: '',
  height: '',
};

export type ContextType = {
  patientsList: PatientState[];
  deletePatient: (id: number) => void;
  managePatient: (id: number) => void;
  setPatient: (obj: PatientState) => void;
  setPatientsList: (arr: PatientState[]) => void;
  sortPatientsList: (sex: string) => void;
  patient: PatientState;
  searchByInputValue: (term: string) => void;
};

export const PatientContext = createContext<ContextType>({
  patientsList: patients,
  deletePatient() {},
  managePatient() {},
  setPatient() {},
  setPatientsList() {},
  sortPatientsList() {},
  searchByInputValue() {},
  patient: InitialPatientValues,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patientsList, setPatientsList] = useState(patients);
  const [patient, setPatient] = useState<typeof InitialPatientValues>(InitialPatientValues);

  const deletePatient = (id: number) => {
    const filteredPatients = patientsList.filter((patient) => patient.id !== id);
    setPatientsList(filteredPatients);
  };

  const managePatient = (id: number) => {
    const findPatient = patientsList.filter((patient) => patient.id === id);
    setPatient(findPatient[0]);
  };

  const sortPatientsList = (sex: string) => {
    let sortedPatientsList = patients;
    if (sex === 'female') {
      sortedPatientsList = patientsList.sort((a, b) => (a.sex > b.sex ? 1 : b.sex > a.sex ? -1 : 0));
    } else if (sex === 'male') {
      sortedPatientsList = patientsList.sort((a, b) => (a.sex > b.sex ? -1 : b.sex > a.sex ? 1 : 0));
    } else if (sex === 'off') {
      sortedPatientsList = patientsList.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0));
    }
    setPatientsList([...sortedPatientsList]);
  };

  const searchByInputValue = (term: string) => {
    const search = patientsList.filter((patient) => {
      return (patient.name.includes(term) || patient.surname.includes(term));
    });
    setPatientsList(search)
  };

  return (
    <PatientContext.Provider value={{ managePatient, deletePatient, setPatientsList, patientsList, patient, setPatient, sortPatientsList, searchByInputValue }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;

// const actionTypes = {
//   changeName = 'CHANGE_NAME',
// };

// console.log(patientsList)

// const [state, dispatch] = useReducer(reducer, initialState);

// const changeName = () => {
//   dispatch({ type: 'CLEAR_CART' });
// };
