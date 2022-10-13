import axios from 'axios';
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';

const InitialUserValues = { email: '', token: '' };

export type UserType = { email: string; token: string };

type PatientContextType = {
  logIn: ({ email, password }: { email: string; password: string }) => any;
  logOut: () => void;
  user: UserType | null;
  errMsg: string;
  register: ({ email, password }: { email: string; password: string }) => any;
  isLoading: boolean;
};

const AuthContext = createContext<PatientContextType>({
  logIn() {},
  logOut() {},
  register() {},
  user: InitialUserValues,
  errMsg: '',
  isLoading: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }): any => {
  const [user, setUser] = useState<UserType | null>(null);
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');
    if (!localStorageUser) return;
    setUser(JSON.parse(localStorageUser));
  }, []);

  const register = async ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/api/user/register', { email, password });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrMsg(error + 'Invalid email or password.');
      setIsLoading(false);
    }
  };

  const logIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
      console.log('axi', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setErrMsg('Invalid email or password.');
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    setErrMsg('');
  };

  return <AuthContext.Provider value={{ user, logIn, logOut, errMsg, register, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);

  return auth;
};
