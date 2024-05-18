// selectors.ts
import { RootState } from "../store/store";

export const selectIsLoggedIn = (state: RootState) => state.isLoggedIn.isLoggedIn;
export const selectUserId = (state: RootState) => state.userId.userId;
export const selectDataLoading = (state: RootState) => state.data.isLoading;
export const selectDataError = (state: RootState) => state.data.isError;
export const selectData = (state: RootState) => state.data.data;

export const selectFilteredData = (state: RootState) => state.data.filteredData;