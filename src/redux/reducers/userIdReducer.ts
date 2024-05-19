import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserIdState {
  userId: string | null;
}

const initialState: UserIdState = {
  userId: null,
};

const userIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    clearUserId(state) {
      state.userId = null;
    },
  },
});

export const { setUserId, clearUserId } = userIdSlice.actions;

export default userIdSlice.reducer;
