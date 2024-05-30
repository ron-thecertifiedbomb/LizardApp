import {RootState} from '../store/store';

export const selectisActiveLink = (state: RootState) =>
  state.isActiveLink.isActiveLink;

export const selectModalState = (state: RootState) => state.modal;

export const selectUserId = (state: RootState) => state.userId.userId;
