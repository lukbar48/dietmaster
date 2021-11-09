import React, { useReducer, createContext, useEffect, useState, ReactNode, useContext } from 'react';
import patients from '../data/data';

interface IPatientsState {
  id: number;
  name: string;
  surname: string;
  age: number;
  sex: string;
  email: string;
  telephone: number;
  bodymass: number;
  weight: number;
  // deletePatient?: (id: number) => void;
}

// type ContextType = {
//   patientsList: IPatientsState[]
//   deletePatient: (id: number) => void
// }

export const PatientContext = createContext<{ patientsList?: IPatientsState[]; deletePatient?: (id: number) => void }>({ patientsList: patients });

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patientsList, setPatientsList] = useState(patients);

  const deletePatient = (id: number) => {
    const filteredPatients = patientsList.filter((patient) => patient.id !== id);
    setPatientsList(filteredPatients);
  };

  return <PatientContext.Provider value={{ deletePatient, patientsList }}>{children}</PatientContext.Provider>;
};

export default PatientProvider;
export const useGlobalContext = () => useContext(PatientContext)

// const actionTypes = {
//   changeName = 'CHANGE_NAME',
// };

// console.log(patientsList)

// const [state, dispatch] = useReducer(reducer, initialState);

// const changeName = () => {
//   dispatch({ type: 'CLEAR_CART' });
// };
