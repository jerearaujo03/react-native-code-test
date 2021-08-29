import * as api from '../api/index';

const initialState = {
  pending: false,
  people: [],
};

const ADD_PERSON_PENDING = 'PEOPLE/ADD_PERSON_PENDING';
const ADD_PERSON_FULFILLED = 'PEOPLE/ADD_PERSON_FULFILLED';
const ADD_PERSON_REJECTED = 'PEOPLE/ADD_PERSON_REJECTED';
const DELETE_PERSON = 'PEOPLE/DELETE_PERSON';

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_PERSON_PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case ADD_PERSON_FULFILLED:
      return {
        ...state,
        pending: false,
        error: '',
        people: [...state.people, {...payload}],
      };
    case ADD_PERSON_REJECTED:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter(p => p.id !== payload),
      };
    default:
      return state;
  }
};

export const addPerson = person => async dispatch => {
  dispatch({type: ADD_PERSON_PENDING});
  try {
    const result = await api.addPerson(person);
    console.log('result', result);
    dispatch({type: ADD_PERSON_FULFILLED, payload: result.person});
  } catch (e) {
    dispatch({type: ADD_PERSON_REJECTED, payload: e.error});
  }
};

export const deletePerson = personId => ({
  type: DELETE_PERSON,
  payload: personId,
});
