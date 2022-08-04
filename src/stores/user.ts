import {createSlice} from '@reduxjs/toolkit';

export type User = {
  isLogin?: boolean;
  userInfo?: {
    name?: string;
    age?: number;
    mobile?: string;
    avatar?: string;
  };
};

const initState: User = {
  isLogin: false,
};

export const counterSlice = createSlice({
  name: 'User',
  initialState: initState,
  reducers: {
    setUserInfo: (state: User, action) => {
      return state;
    },
  },
});

export const {setUserInfo} = counterSlice.actions;

export default counterSlice.reducer;
