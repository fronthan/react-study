import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
  },
});

export const { increment, decrement } = userSlice.actions; // 액션 생성함수
export default userSlice.reducer; // 리듀서