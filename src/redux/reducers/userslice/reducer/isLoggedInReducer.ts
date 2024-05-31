import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsLoggedInState {
  isLoggedIn: boolean;
}

const initialState: IsLoggedInState = {
  isLoggedIn: false,
};

const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
