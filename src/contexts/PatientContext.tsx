import { createContext, useEffect, useState, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from 'redux/patientsListSlice';
import { InitialPatientType } from 'types/types';

export type PatientContextType = {
  managePatient: (id: string) => void;
  setPatient: (obj: InitialPatientType | null) => void;
  searchResults: InitialPatientType[];
  patient: InitialPatientType | null;
};

export const PatientContext = createContext<PatientContextType>({
  managePatient() {},
  setPatient() {},
  searchResults: [],
  patient: null,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<InitialPatientType | null>(null);
  const [searchResults, setSearchResults] = useState<InitialPatientType[]>([]);

  const patientsList = useSelector((state: any) => state.patientsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const managePatient = (id: string) => {
    const findPatient = patientsList.find((patient: any) => patient.id === id);
    setPatient(findPatient);
  };

  return (
    <PatientContext.Provider
      value={{
        managePatient,
        patient,
        setPatient,
        searchResults,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
