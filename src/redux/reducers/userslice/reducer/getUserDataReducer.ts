import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { User } from '../types/types';

interface UserData {
  userInfo: User | null;
}

const initialState: UserData = {
  userInfo: null,
};

const getUserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<User>) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = getUserData.actions;

export default getUserData.reducer;
