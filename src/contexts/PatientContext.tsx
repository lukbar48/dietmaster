import { createContext, useEffect, useState, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialPatientType } from 'types/interfaces';
import { fetchPatients } from '../store';

export type PatientContextType = {
  managePatient: (id: string) => void;
  setPatient: (obj: InitialPatientType | null) => void;
  searchResults: InitialPatientType[];
  patient: InitialPatientType | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const PatientContext = createContext<PatientContextType>({
  managePatient() {},
  setPatient() {},
  searchResults: [],
  searchTerm: '',
  setSearchTerm() {},
  patient: null,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<InitialPatientType | null>(null);
  const [searchResults, setSearchResults] = useState<InitialPatientType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const managePatient = (id: string) => {
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
