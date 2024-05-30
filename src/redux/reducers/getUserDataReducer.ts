import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  user: any[] | null;
}

const initialState: DataState = {
  user: null,
};

const getUserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userInfo(state, action: PayloadAction<any[]>) {
      state.user = action.payload;
    },
  },
});

export const {userInfo} = getUserData.actions;

export default getUserData.reducer;
