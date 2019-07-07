import types from './';
import { eeApiWithAuth } from '../api/eeApiWithAuth';

export const fetchMessages = id => async dispatch => {
  dispatch( { type: types.FETCH_MESSAGES_START } );
  try {
    const response = await eeApiWithAuth()
    .get( `/messages/${id}` );
    dispatch( {
      type   : types.FETCH_MESSAGES_SUCCESS,
      payload: response.data,
    } );
  } catch (error) {
    dispatch( {
      type   : types.FETCH_MESSAGES_FAIL,
      payload: error.response.data,
    } );
  }
};

export const fetchAllMessages = () => async dispatch => {
  dispatch( { type: types.FETCH_ALL_MESSAGES_START } );
  try {
    const response = await eeApiWithAuth()
    .get( '/messages' );
    dispatch( {
      type   : types.FETCH_ALL_MESSAGES_SUCCESS,
      payload: response.data,
    } );
  } catch (error) {
    dispatch( {
      type   : types.FETCH_ALL_MESSAGES_FAIL,
      payload: error.response.data,
    } );
  }
};

export const addMessage = newMessage => async dispatch => {
  dispatch({type: types.ADD_MESSAGE_START});
  try {
    const response = await eeApiWithAuth().post('/messages',newMessage);
    console.log(response.data)
    dispatch({type: types.ADD_MESSAGE_SUCCESS, payload: response.data})
  } catch(error) {
    dispatch({type:types.ADD_MESSAGE_FAIL, payload: error.response.data})
  }
}

export const deleteMessage = id => async dispatch => {
  dispatch({type: types.DELETE_MESSAGE_START});
  try {
    const response = await eeApiWithAuth().delete(`/messages/${id}`)
    dispatch({type: types.DELETE_MESSAGE_SUCCESS, payload: response.data})
  } catch(error) {
    dispatch({type:types.DELETE_MESSAGE_FAIL, payload: error.response.data})
  }
}