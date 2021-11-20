import React, { useReducer, createContext, useEffect, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import patients from '../data/data';
import { PatientState } from '../data/data';
import { InitialPatientValues } from '../data/data';
import PatientsReducer from '../reducers/PatientsReducer';
import { db } from 'mocks/db';

export type PatientContextType = {
  patientsList: PatientState[];
  deletePatient: (id: number) => void;
  addPatient: (obj: PatientState) => void;
  managePatient: (id: number) => void;
  setPatient: (obj: PatientState) => void;
  searchResults: PatientState[];
  sortPatientsList: (sex: string) => void;
  patient: PatientState;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const PatientContext = createContext<PatientContextType>({
  patientsList: patients,
  deletePatient() {},
  addPatient() {},
  managePatient() {},
  setPatient() {},
  searchResults: patients,
  searchTerm: '',
  setSearchTerm() {},
  sortPatientsList() {},
  patient: InitialPatientValues,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<typeof InitialPatientValues>(InitialPatientValues);
  const [patientsList, dispatch] = useReducer(PatientsReducer, [InitialPatientValues]);
  const [searchResults, setSearchResults] = useState<typeof InitialPatientValues[]>([] as typeof InitialPatientValues[]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .post('/dietmaster', searchTerm)
      .then(({ data }) => {
        setSearchResults(data);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  useEffect(() => {
    // console.log(patientsList)
  }, [patientsList]);

  useEffect(() => {
    axios
      .get('/dietmaster')
      .then(({ data }) => {
        dispatch({ type: 'ADD_PATIENTS_LIST', payload: data });
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePatient = (id: number) => {
    const findPatient = db.patient.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    });
    if (findPatient) {
      axios
        .delete('/dietmaster',{ data: findPatient })
        .then(({ data }) => {
          dispatch({ type: 'ADD_PATIENTS_LIST', payload: db.patient.getAll() })
        })
        .catch((err) => console.log(err));
    }
  };

  const addPatient = (obj: PatientState) => {
    dispatch({ type: 'ADD_PATIENT', payload: obj });
  };

  const sortPatientsList = (sex: string) => {
    dispatch({ type: 'SORT_PATIENTS_LIST', payload: sex });
  };

  const managePatient = (id: number) => {
    const findPatient = patientsList.filter((patient) => patient.id === id);
    setPatient(findPatient[0]);
  };

  return (
    <PatientContext.Provider
      value={{
        managePatient,
        deletePatient,
        patientsList,
        patient,
        setPatient,
        sortPatientsList,
        addPatient,
        searchResults,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;

// const actionTypes = {
//   changeName = 'CHANGE_NAME',
// };
