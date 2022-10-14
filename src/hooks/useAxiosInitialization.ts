import axios from 'axios';
import { useLayoutEffect } from 'react';

export const useAxiosInitialization = () => {
  useLayoutEffect(() => {
    axios.defaults.baseURL = process.env.API_URL_BASE;
  });
};
