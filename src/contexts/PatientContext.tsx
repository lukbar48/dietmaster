import { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { InitialPatientType } from 'types/interfaces';
import { fetchPatients } from 'store/store';

export const initialPatient = {
  id: 0,
  name: '',
  surname: '',
  age: '',
  sex: 'Male',
  email: '',
  telephone: '',
  bodymass: '',
  height: '',
  notes: '',
  activity: '1.2',
  calories: '0',
  protein: '30',
  fat: '20',
  carbs: '50',
  allergens: [],
  preferences: [],
  diseases: [],
};

export type PatientContextType = {
  managePatient: (id: number) => void;
  setPatient: (obj: InitialPatientType) => void;
  searchResults: InitialPatientType[];
  patient: InitialPatientType;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const PatientContext = createContext<PatientContextType>({
  managePatient() {},
  setPatient() {},
  searchResults: [initialPatient],
  searchTerm: '',
  setSearchTerm() {},
  patient: initialPatient,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<InitialPatientType>(initialPatient);
  const [searchResults, setSearchResults] = useState<InitialPatientType[]>([] as InitialPatientType[]);
  const [searchTerm, setSearchTerm] = useState('');

  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients())
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
    const findPatient = patientsList.filter((patient: any) => patient.id === id);
    setPatient(findPatient[0]);
  };

  return (
    <PatientContext.Provider
      value={{
        managePatient,
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
