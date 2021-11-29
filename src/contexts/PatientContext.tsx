import { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { InitialPatientType, initialPatientValues } from 'types/interfaces';
import { fetchPatients, useGetPatientsQuery } from 'store/store';

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
  searchResults: [initialPatientValues],
  searchTerm: '',
  setSearchTerm() {},
  patient: initialPatientValues,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<InitialPatientType>(initialPatientValues);
  const [searchResults, setSearchResults] = useState<InitialPatientType[]>([] as InitialPatientType[]);
  const [searchTerm, setSearchTerm] = useState('');

  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();

  // const data = useGetPatientsQuery();
  // useEffect(() => {
    // console.log(data);
  // }, [data]);

  useEffect(() => {
    // console.log(data);
    // getPatients(data)
    dispatch(fetchPatients());
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
