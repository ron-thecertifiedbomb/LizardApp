import { RootState } from "../store/store";

export const selectIsLoggedIn = (state: RootState) => state.isLoggedIn.isLoggedIn;
export const selectUserId = (state: RootState) => state.userId.userId;