import axios from 'axios';
import React, { createContext, ReactNode, useEffect, useState, useContext } from 'react';

const InitialUserValues = { id: '', login: '', name: '', token: '' };

type PatientContextType = {
  signIn: ({ login, password }: { login: string; password: string }) => any;
  signOut: () => void;
  user: typeof InitialUserValues;
  errMsg: string;
};

const AuthContext = createContext<PatientContextType>({
  signIn() {},
  signOut() {},
  user: InitialUserValues,
  errMsg: '',
});

export const AuthProvider = ({ children }: { children: ReactNode }): any => {
  const [user, setUser] = useState(InitialUserValues);
  const [errMsg, setErrMsg] = useState('');

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     (async () => {
  //       try {
  //         const response = await axios.get('/me', {
  //           headers: {
  //             authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setUser(response.data[0]);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }
  // }, []);

  const signIn = async ({ login, password }: { login: string; password: string }) => {
    try {
      const response = await axios.post('/dietmaster/login', { login, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error);
      setErrMsg('Invalid email or password.');
    }
  };

  const signOut = () => {
    setUser({ id: '', login: '', name: '', token: '' });
    localStorage.removeItem('token');
    setErrMsg('');
  };
  return <AuthContext.Provider value={{ user, signIn, signOut, errMsg }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
