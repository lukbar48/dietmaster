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
        .delete('/dietmaster', { data: findPatient })
        .then(({ data }) => {
          dispatch({ type: 'DELETE_PATIENT', payload: data.removedPatient });
        })
        .catch((err) => console.log(err));
    }
  };

  const addPatient = (newPatient: PatientState) => {
    const findPatient = db.patient.findFirst({
      where: {
        id: {
          equals: Number(newPatient.id),
        },
      },
    });

    if (!findPatient) {
      axios
        .post(`/dietmaster/add`, patient)
        .then(({ data }) => {})
        .catch((err) => console.log(err));
    } else if (findPatient) {
      axios
        .put(`/dietmaster/add`, patient)
        .then(({ data }) => {})
        .catch((err) => console.log(err));
    }
    // dispatch({ type: 'ADD_PATIENT', payload: newPatient });
    dispatchRedux(addPatient(newPatient))
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
