import React, { useReducer, createContext, useEffect, useState, ReactNode, useContext } from 'react';
import patients from '../data/data';
import { PatientState } from '../data/data';
import { InitialPatientValues } from '../data/data';
import reducer from './reducer'

export type ContextType = {
  patientsList: PatientState[];
  deletePatient: (id: number) => void;
  managePatient: (id: number) => void;
  setPatient: (obj: PatientState) => void;
  setPatientsList: (arr: PatientState[]) => void;
  sortPatientsList: (sex: string) => void;
  patient: PatientState;
  searchByInputValue: (term: string) => void;
  calculateBMI: () => string;
  BMIdescription: () => string;
  calculateRisk: () => string;
  calculateIdealWeight: () => string;
};

export const PatientContext = createContext<ContextType>({
  patientsList: patients,
  deletePatient() {},
  managePatient() {},
  setPatient() {},
  setPatientsList() {},
  sortPatientsList() {},
  searchByInputValue() {},
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
  const [patientsList, setPatientsList] = useState(patients);
  const [patient, setPatient] = useState<typeof InitialPatientValues>(InitialPatientValues);


  // const [state, dispatch] = useReducer(reducer, patients);



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
      return patient.name.includes(term) || patient.surname.includes(term);
    });
    setPatientsList(search);
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
  }

  const calculateIdealWeight = () => {
    const height = Number(patient.height)
    let idealWeightMin = ''
    let idealWeightMax = ''
    if (patient.sex === 'Male') {
      idealWeightMin = (height - 100 - ((height - 138)/4)).toString()
      idealWeightMax = (height - 100 - ((height - 162)/4)).toString()
    } else {
      idealWeightMin = (height - 100 - ((height - 138)/2)).toString()
      idealWeightMax = (height - 100 - ((height - 162)/2)).toString()
    }

    return `${idealWeightMin} - ${idealWeightMax} kg`
  }

  return (
    <PatientContext.Provider
      value={{
        managePatient,
        deletePatient,
        setPatientsList,
        patientsList,
        patient,
        setPatient,
        sortPatientsList,
        searchByInputValue,
        calculateBMI,
        BMIdescription,
        calculateRisk,
        calculateIdealWeight
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


// const changeName = () => {
//   dispatch({ type: 'CLEAR_CART' });
// };
