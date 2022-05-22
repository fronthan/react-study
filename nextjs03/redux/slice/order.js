import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: ''
}

const orderSlice = createSlice({
  name:'order',
  initialState,
  reducers: {
   setName(state, action) {
     state.name = action.payload.name
   },
  }
});

export default orderSlice;