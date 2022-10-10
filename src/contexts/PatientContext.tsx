import { createContext, useState, ReactNode } from 'react';
import { PatientType } from 'types/types';

export type PatientContextType = {
  setPatient: (obj: PatientType | null) => void;
  patient: PatientType | null;
};

export const PatientContext = createContext<PatientContextType>({
  setPatient() {},
  patient: null,
});

const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<PatientType | null>(null);

  return (
    <PatientContext.Provider
      value={{
        patient,
        setPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
