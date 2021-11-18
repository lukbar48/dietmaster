import React, { useReducer, createContext, useEffect, useState, ReactNode, useContext } from 'react';
import axios from 'axios';
import patients from '../data/data';
import { PatientState } from '../data/data';
import { InitialPatientValues } from '../data/data';
import PatientsReducer from './PatientsReducer';
import { db } from 'mocks/db';

export type ContextType = {
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
  calculateBMI: () => string;
  BMIdescription: () => string;
  calculateRisk: () => string;
  calculateIdealWeight: () => string;
};

export const PatientContext = createContext<ContextType>({
  patientsList: patients,
  deletePatient() {},
  addPatient() {},
  managePatient() {},
  setPatient() {},
  searchResults: patients,
  searchTerm: '',
  setSearchTerm() {},
  sortPatientsList() {},
  calculateBMI() {
    return '';
  },
  BMIdescription() {
    return '';
  },
  calculateRisk() {
    return '';
  },
  calculateIdealWeight() {
    return '';
  },
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
    console.log(db.patient.getAll());
    const findPatient = db.patient.findFirst({
      where: {
        id: {
          equals: Number(id),
        },
      },
    });
    console.log(findPatient);
    if (findPatient) {
      axios
        .delete('/dietmaster')
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }

    // dispatch({ type: 'DELETE_PATIENT', payload: id });
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

  const calculateBMI = () => {
    const height = Number(patient.height) / 100;
    const BMI = (Number(patient.bodymass) / Math.pow(height, 2)).toFixed(2).toString();
    return BMI;
  };

  const BMIdescription = () => {
    const height = Number(patient.height) / 100;
    let BMI = Number((Number(patient.bodymass) / Math.pow(height, 2)).toFixed(2));
    if (BMI < 25 && BMI > 18.5) {
      return 'Normal';
    } else if (BMI >= 25) {
      return 'Obesity';
    } else if (BMI <= 18.5) {
      return 'Underweight';
    } else {
      return 'OK';
    }
  };

  const calculateRisk = () => {
    const height = Number(patient.height) / 100;
    let BMI = Number((Number(patient.bodymass) / Math.pow(height, 2)).toFixed(2));
    if (BMI < 25 && BMI > 18.5) {
      return 'Lowest';
    } else if (BMI >= 25 && BMI <= 35) {
      return 'High';
    } else if (BMI >= 35) {
      return 'Very high';
    } else if (BMI <= 18.5) {
      return 'High';
    } else {
      return 'OK';
    }
  };

  const calculateIdealWeight = () => {
    const height = Number(patient.height);
    let idealWeightMin = '';
    let idealWeightMax = '';
    if (patient.sex === 'Male') {
      idealWeightMin = (height - 100 - (height - 138) / 4).toString();
      idealWeightMax = (height - 100 - (height - 162) / 4).toString();
    } else {
      idealWeightMin = (height - 100 - (height - 138) / 2).toString();
      idealWeightMax = (height - 100 - (height - 162) / 2).toString();
    }

    return `${idealWeightMin} - ${idealWeightMax} kg`;
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
        calculateBMI,
        BMIdescription,
        calculateRisk,
        calculateIdealWeight,
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
