import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface modalState {
  modalState: boolean;
  payloadText: string | null; // Payload text for loading or success message
}

const initialState: modalState = {
  modalState: false,
  payloadText: null,
};

const modalSlice = createSlice({
  name: 'modalProvider',
  initialState,
  reducers: {
    setToOpen(state, action: PayloadAction<string | null>) {
      state.modalState = true;
      state.payloadText = action.payload; // Set payload text
    },
    setToClose(state) {
      state.modalState = false;
      state.payloadText = null; // Reset payload text when closing
    },
  },
});

export const { setToOpen, setToClose } = modalSlice.actions;

export default modalSlice.reducer;
