import types from '../actions';

const initialState = {
  application: {
    id: null,
  },
  isLoading  : false,
  isSuccess  : false,
  errors     : null,
  employment : [],
  education  : [],
  references : [],
  skills     : [],
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGOUT_SUCCESS:
      return initialState;
    case types.SET_INITIAL_SUCCESS:
      return {
        ...state,
        isSuccess: false,
      };
    case types.PERSONAL_DATA_START:
      return {
        ...state,
        isLoading: true,
        errors   : null,
      };
    case types.PERSONAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        app_id   : payload,
      };
    case types.PERSONAL_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors   : payload,
      };
    case types.EMPLOYMENT_DATA_START:
      return {
        ...state,
        isSuccess: false,
        isLoading: true,
      };
    case types.EMPLOYMENT_DATA_SUCCESS:
      return {
        ...state,
        isSuccess : true,
        isLoading : false,
        errors    : null,
        employment: [...state.employment, payload],
      };
    case types.EMPLOYMENT_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors   : payload,
      };
    case types.FETCH_APPLICATION_DATA_START:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        errors   : null,
      };
    case types.FETCH_APPLICATION_DATA_SUCCESS:
      return {
        ...state,
        isLoading  : false,
        isSuccess  : true,
        application: payload,
        errors     : null,
      };

    case types.FETCH_APPLICATION_DATA_FAIL:
      return {
        ...state,
        isLoading  : false,
        isSuccess  : false,
        application: {
          app_id: null,
        },
        errors     : payload,
      };
    case types.SET_APPLICATION_SUCCESS:
      return {...state, isSuccess: true}
    default:
      return state;
  }
}