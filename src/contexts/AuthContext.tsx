import axios from 'axios';
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';

const InitialUserValues = { email: '', token: '' };

type PatientContextType = {
  logIn: ({ email, password }: { email: string; password: string }) => any;
  signOut: () => void;
  user: typeof InitialUserValues | null;
  errMsg: string;
  register: ({ email, password }: { email: string; password: string }) => any;
  isLoading: boolean;
};

const AuthContext = createContext<PatientContextType>({
  logIn() {},
  signOut() {},
  register() {},
  user: InitialUserValues,
  errMsg: '',
  isLoading: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }): any => {
  const [user, setUser] = useState<typeof InitialUserValues | null>(null);
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // if (token) {
    //   (async () => {
    //     try {
    //       const response = await axios.get('/me', {
    //         headers: {
    //           authorization: `Bearer ${token}`,
    //         },
    //       });
    //       setUser(response.data[0]);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })();
    // }
  }, []);

  const register = async ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/api/user/register', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
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
      console.log('RES LOG', response);
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error);
      setErrMsg('Invalid email or password.');
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    setErrMsg('');
  };

  return <AuthContext.Provider value={{ user, logIn, signOut, errMsg, register, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);

  return auth;
};
