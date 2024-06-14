import { RootState } from "../../../store/store";

export const modalState = (state: RootState) => state.modalProvider.modalState;
export const modalObject = (state: RootState) => state.modalProvider.payloadObject;