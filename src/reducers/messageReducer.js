import types from '../actions';

const initialState = {
  messages : [],
  isLoading: false,
  errors   : null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_MESSAGES_START:
      return {
        ...state,
        isLoading: true,
        errors   : null,
      };
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages : payload,
      };
    case types.FETCH_MESSAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        messages : [],
        errors   : payload,
      };
    case types.FETCH_ALL_MESSAGES_START:
      return {
        ...state,
        isLoading: true,
        errors   : null,
      };
    case types.FETCH_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors   : null,
        messages : payload,
      };
    case types.FETCH_ALL_MESSAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        errors   : payload,
        messages : [],
      };
    case types.ADD_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        errors   : null,
      };
    case types.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors   : null,
      };
    case types.ADD_MESSAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        errors   : payload,
      };
    case types.DELETE_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        errors   : null,
      };
    case types.DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors   : null,
        messages: payload
      };
    case types.DELETE_MESSAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        errors   : payload,
      };
    default:
      return state;
  }
}