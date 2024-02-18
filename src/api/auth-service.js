// https://connections-api.herokuapp.com/users/signup
import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  timeout: 15000,
});

export const signUpRequest = body => authInstance.post('/users/signup', body);

export const logInRequest = body => authInstance.post('/users/login', body);

export const checkTokenRequest = async token => {
  authInstance.defaults.headers.authorization = `Bearer ${token}`;
  try {
    const response = await authInstance('/users/current');
    console.log(response);
    return response;
  } catch (error) {
    authInstance.defaults.headers.authorization = '';
    throw error;
  }
};
