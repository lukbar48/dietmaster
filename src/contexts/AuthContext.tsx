import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { unauthorizeAxiosClient, authorizeAxiosClient, restClient } from '../helpers/axiosInit';
import { reset } from 'redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';

const InitialUserValues = { email: '', token: '' };

export type UserType = { email: string; token: string };
type MessageType = { type: 'error' | 'success'; text: string };

type PatientContextType = {
  logIn: ({ email, password }: { email: string; password: string }) => any;
  logOut: () => void;
  user: UserType | null;
  message: MessageType | null;
  register: ({ email, password }: { email: string; password: string }) => any;
  isLoading: boolean;
};

const AuthContext = createContext<PatientContextType>({
  logIn() {},
  logOut() {},
  register() {},
  user: InitialUserValues,
  message: null,
  isLoading: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }): any => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<UserType | null>(null);
  const [message, setMessage] = useState<MessageType | null>(null);
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
      setMessage({ type: 'success', text: 'Registered successfully! Feel free to log in.' });
      return response.data;
    } catch (error: any) {
      console.log(error.status);
      setMessage({ type: 'error', text: 'Invalid email or password while registering.' });
    } finally {
      setIsLoading(false);
    }
  };

  const logIn = async ({ email, password }: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await restClient.post('/user/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      setMessage({ type: 'error', text: 'Invalid email or password while login.' });
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    setMessage(null);
    unauthorizeAxiosClient();
    dispatch(reset());
  };

  return <AuthContext.Provider value={{ user, logIn, logOut, message, register, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);

  return auth;
};
