import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalPayload {
  type: 'Loading' | 'Confirmation' | 'Display';
  title: string;
  message?: string;
  confirmAction?: () => void;
  cancelAction?: () => void;
  closeAction?: () => void;
}

interface ModalState {
  modalState: boolean;
  payloadObject: ModalPayload | null;
}

const initialState: ModalState = {
  modalState: false,
  payloadObject: null,
};

const modalSlice = createSlice({
  name: 'modalProvider',
  initialState,
  reducers: {
    setToOpen(state, action: PayloadAction<ModalPayload>) {
      state.modalState = true;
      state.payloadObject = action.payload;
    },
    setToClose(state) {
      state.modalState = false;
      state.payloadObject = null;
    },
  },
});

export const { setToOpen, setToClose } = modalSlice.actions;

export default modalSlice.reducer;
