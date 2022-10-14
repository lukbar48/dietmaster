import axios from 'axios';

export const restClient = axios.create({
  baseURL: `http://localhost:4000/api`,
});

export const authorizeAxiosClient = (token: string) => {
  restClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const unauthorizeAxiosClient = () => {
  restClient.defaults.headers.common['Authorization'] = '';
};
