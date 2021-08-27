import {combineReducers} from 'redux';
import auth from './auth';
import people from './people';

const rootReducer = {
  auth,
  people,
};

export default combineReducers(rootReducer);
