import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsActiveLinkState {
  isActiveLink: string;
}

const initialState: IsActiveLinkState = {
    isActiveLink: 'All',
};

const isActiveLinkSlice = createSlice({
  name: 'isActiveLink',
  initialState,
  reducers: {
    setIsActiveLink(state, action: PayloadAction<string>) {
      state.isActiveLink = action.payload;
    },
  },
});

export const { setIsActiveLink } = isActiveLinkSlice.actions;

export default isActiveLinkSlice.reducer;
