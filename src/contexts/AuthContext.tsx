import axios from 'axios';
import { createContext, ReactNode, useState, useContext } from 'react';

const InitialUserValues = { id: '', email: '', name: '', token: '' };

type PatientContextType = {
  logIn: ({ email, password }: { email: string; password: string }) => any;
  signOut: () => void;
  user: typeof InitialUserValues;
  errMsg: string;
  register: ({ email, password }: { email: string; password: string }) => any;
};

const AuthContext = createContext<PatientContextType>({
  logIn() {},
  signOut() {},
  register() {},
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

  const register = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/register', { email, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error);
      setErrMsg('Invalid email or password.');
    }
  };

  const logIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error);
      setErrMsg('Invalid email or password.');
    }
  };

  const signOut = () => {
    setUser({ id: '', email: '', name: '', token: '' });
    localStorage.removeItem('token');
    setErrMsg('');
  };

  return <AuthContext.Provider value={{ user, logIn, signOut, errMsg, register }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
