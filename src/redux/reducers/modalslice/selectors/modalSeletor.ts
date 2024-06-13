import { RootState } from "../../../store/store";

export const selectModalState = (state: RootState) => state.modal.IsClose;