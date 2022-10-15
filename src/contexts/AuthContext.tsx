import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { unauthorizeAxiosClient, authorizeAxiosClient, restClient } from '../helpers/axiosInit';
import { reset } from 'redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';

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
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<UserType | null>(null);
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');
    if (!localStorageUser) return;
    const parsedUser = JSON.parse(localStorageUser);
    authorizeAxiosClient(parsedUser.token);
    setUser(parsedUser);
  }, []);

  const register = async ({ email, password }: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await restClient.post('/user/register', { email, password });
      return response.data;
    } catch (error) {
      console.log(error);
      setErrMsg(error + 'Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  const logIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await restClient.post('/user/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrMsg('Invalid email or password.');
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    setErrMsg('');
    unauthorizeAxiosClient();
    dispatch(reset());
  };

  return <AuthContext.Provider value={{ user, logIn, logOut, errMsg, register, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);

  return auth;
};
