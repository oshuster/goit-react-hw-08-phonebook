import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  timeout: 15000,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  } else {
    instance.defaults.headers.authorization = '';
  }
};

export const signUpRequest = async body => {
  const response = await instance.post('/users/signup', body);
  setToken(response.data.token);
  return response;
};

export const logInRequest = async body => {
  const response = await instance.post('/users/login', body);
  setToken(response.data.token);
  return response;
};

export const checkTokenRequest = async token => {
  setToken(token);
  try {
    const response = await instance('/users/current');
    return response;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logOutRequest = async () => {
  const response = await instance.post('/users/logout');
  return response;
};

export default instance;
