import axios from 'axios';

export const eeApiWithAuth = () => {
  const token = localStorage.getItem( 'ee_login_token' );

  return axios.create( {
    baseURL: 'http://192.168.1.4/api',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': token
    }
  } );
};