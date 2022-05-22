import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email:'',
  consulting: [
    {}
  ]
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
   setName(state, action) {
     state.name = action.payload.name,
     state.email = action.payload.email
   },

  }
});

export default userSlice;