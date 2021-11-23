import React, { useReducer, createContext, useEffect, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import patients from '../data/data';
import { PatientState } from '../data/data';
import { InitialPatientValues } from '../data/data';
import { db } from 'mocks/db';
import PatientsReducer from 'reducers/PatientsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getPatientsList, selectPatients, addPatient } from 'store/store';

export type PatientContextType = {
  patientsList: PatientState[];
  managePatient: (id: number) => void;
  setPatient: (obj: PatientState) => void;
  searchResults: PatientState[];
  patient: PatientState;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const PatientContext = createContext<PatientContextType>({
  patientsList: patients,
  managePatient() {},
  setPatient() {},
  searchResults: patients,
  searchTerm: '',
  setSearchTerm() {},
  patient: InitialPatientValues,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<typeof InitialPatientValues>(InitialPatientValues);
  const [patientsList, dispatch] = useReducer(PatientsReducer, [InitialPatientValues]);
  const [searchResults, setSearchResults] = useState<typeof InitialPatientValues[]>([] as typeof InitialPatientValues[]);
  const [searchTerm, setSearchTerm] = useState('');

  const patientsRedux = useSelector((state: any) => state.patients);
  const dispatchRedux = useDispatch();

  useEffect(() => {
    axios
      .get('/dietmaster')
      .then(({ data }) => {
        dispatchRedux(getPatientsList(data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post('/dietmaster', searchTerm)
      .then(({ data }) => {
        setSearchResults(data);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  const managePatient = (id: number) => {
    const findPatient = patientsRedux.filter((patient: any) => patient.id === id);
    setPatient(findPatient[0]);
  };

  return (
    <PatientContext.Provider
      value={{
        managePatient,
        patientsList,
        patient,
        setPatient,
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
