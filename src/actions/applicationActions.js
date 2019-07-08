import types from './';
import { eeApiWithAuth } from '../api/eeApiWithAuth';

export const setInitialSuccess = () => {
  return {
    type: types.SET_INITIAL_SUCCESS,
  };
};

export const sendPersonalData = persData => async dispatch => {
  dispatch( { type: types.PERSONAL_DATA_START } );
  try {
    const response = await eeApiWithAuth()
    .post( '/application/personal-data', persData );
    dispatch( {
      type   : types.PERSONAL_DATA_SUCCESS,
      payload: response.data,
    } );
  } catch (error) {
    dispatch( {
      type: types.PERSONAL_DATA_FAILURE,
      payload: error.response.data
    } );
  }
};