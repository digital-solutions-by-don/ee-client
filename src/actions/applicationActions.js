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
      type   : types.PERSONAL_DATA_FAIL,
      payload: error.response.data,
    } );
  }
};

export const sendEmploymentData = emplData => async dispatch => {
  dispatch( { type: types.EMPLOYMENT_DATA_START } );
  try {
    const response = await eeApiWithAuth()
    .post( '/application/employment', emplData );
    dispatch( {
      type   : types.EMPLOYMENT_DATA_SUCCESS,
      payload: response.data,
    } );
  } catch (error) {
    dispatch( {
      type   : types.EMPLOYMENT_DATA_FAIL,
      payload: error.response.data,
    } );
  }
};

export const fetchApplication = () => async dispatch => {
  dispatch({type: types.FETCH_APPLICATION_DATA_START});
  try {
    const response = await eeApiWithAuth().get('/application');
    dispatch({type: types.FETCH_APPLICATION_DATA_SUCCESS, payload: response.data})

  } catch (error) {
    dispatch({type: types.FETCH_APPLICATION_DATA_FAIL, payload: error.response.data})
  }
}

export const setSuccess = () => {
  return ({
    type: types.SET_APPLICATION_SUCCESS
  })
}