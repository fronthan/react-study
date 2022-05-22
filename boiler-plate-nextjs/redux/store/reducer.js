import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../slice/user';
import orderSlice from '../slice/order';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  order:orderSlice.reducer,
});
export default rootReducer;