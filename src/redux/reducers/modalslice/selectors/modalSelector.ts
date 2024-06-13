import { RootState } from "../../../store/store";

export const selectModalState = (state: RootState) => state.modalProvider.modalState;
export const modalTitle = (state: RootState) => state.modalProvider.payloadText;