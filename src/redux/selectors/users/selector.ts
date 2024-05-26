import {RootState} from '../../store/store';


export const selectIsLoggedIn = (state: RootState) => state.isLoggedIn.isLoggedIn;
export const selectUserId = (state: RootState) => state.userId.userId;
export const selectData = (state: RootState) => state.users.data;
// export const selectFilteredData = (state: RootState) => state.users.filteredData;
