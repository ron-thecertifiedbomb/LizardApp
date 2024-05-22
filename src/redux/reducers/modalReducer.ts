import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface modalState {
    isOpen: boolean;
    IsClose: boolean;
}

const initialState: modalState = {
  isOpen: false,
  IsClose: true,
};


const modalSlice = createSlice({
  name: 'modalProvider',
  initialState,
  reducers: {
    setToOpen(state) {
        state.isOpen = true;
        state.IsClose = false;
      },
      setToClose(state) {
        state.isOpen = false;
        state.IsClose = true;
      },
  },
});

export const { setToOpen, setToClose } = modalSlice.actions;

export default modalSlice.reducer;
