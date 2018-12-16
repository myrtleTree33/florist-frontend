import { combineReducers } from 'redux';

/* Start  Add your reducers here */
import userReducer from './userReducer';
/* End    Add your reducers here */

export default combineReducers({
  user: userReducer
});
