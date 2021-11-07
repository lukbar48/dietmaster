import React, { useReducer, createContext, useEffect, useState, ReactNode } from 'react';
import patients, { PatientsState } from '../data/data';

// const initialState = {
//   name: '',
//   surname: '',
//   age: 0,
//   id: 0,
//   sex: '',
// };

const AppContext = createContext<PatientsState>(patients);

const AppProvider = ({ children }: {children: ReactNode}) => {
  const [patientsList, setPatientsList] = useState<PatientsState>(patients);
  // console.log(patientsList)

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const changeName = () => {
  //   dispatch({ type: 'CLEAR_CART' });
  // };

  return <AppContext.Provider value={patientsList}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
  return createContext(AppContext);
};

// const actionTypes = {
//   changeName = 'CHANGE_NAME',
// };
