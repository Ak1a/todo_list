import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import users from '../pages/users/reducer';

const reducers = combineReducers({
  form,
  users
});

export default reducers;