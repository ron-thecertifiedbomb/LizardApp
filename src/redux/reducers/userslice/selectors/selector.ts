import {RootState} from '../../../store/store';

export const userIsLoggedIn = (state: RootState) => state.isLoggedIn.isLoggedIn;
export const selectUserId = (state: RootState) => state.userId.userId;
export const selectData = (state: RootState) => state.users;




