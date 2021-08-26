import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = {
  auth,
};

export default combineReducers(rootReducer);
