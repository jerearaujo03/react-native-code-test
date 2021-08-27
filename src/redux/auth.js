import * as api from '../api/index';

const initialState = {
  pending: false,
  user: null,
};

const SIGN_IN_PENDING = 'AUTH/SIGN_IN_PENDING';
const SIGN_IN_FULFILLED = 'AUTH/SIGN_IN_FULFILLED';
const SIGN_IN_REJECTED = 'AUTH/SIGN_IN_REJECTED';
const SIGN_OUT = 'AUTH/SIGN_OUT';

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SIGN_IN_PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case SIGN_IN_FULFILLED:
      return {
        ...state,
        pending: false,
        error: '',
        user: payload,
      };
    case SIGN_IN_REJECTED:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        pending: false,
        error: '',
        user: null,
      };
    default:
      return state;
  }
};

export const signIn = (username, password) => async dispatch => {
  dispatch({type: SIGN_IN_PENDING});
  try {
    const result = await api.signIn(username, password);
    dispatch({type: SIGN_IN_FULFILLED, payload: result.user});
  } catch (e) {
    dispatch({type: SIGN_IN_REJECTED, payload: e.error});
  }
};

export const signOut = () => ({
  type: SIGN_OUT,
});
