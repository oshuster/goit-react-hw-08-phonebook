import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  timeout: 15000,
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  } else {
    authInstance.defaults.headers.authorization = '';
  }
};

export const signUpRequest = async body => {
  const response = await authInstance.post('/users/signup', body);
  setToken(response.data.token);
  return response;
};

export const logInRequest = async body => {
  const response = await authInstance.post('/users/login', body);
  setToken(response.data.token);
  return response;
};

export const checkTokenRequest = async token => {
  setToken(token);
  try {
    const response = await authInstance('/users/current');
    return response;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logOutRequest = async () => {
  const response = await authInstance.post('/users/logout');
  return response;
};
