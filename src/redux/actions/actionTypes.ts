// actions/buttonActions.ts
import {createAction} from '@reduxjs/toolkit';
import {IProduct} from '../../types/Products/type';

export const BUTTON_CLICK = 'BUTTON_CLICK';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const buttonClick = createAction<void>('BUTTON_CLICK');
export const fetchDataSuccess = createAction<IProduct[]>(FETCH_DATA_SUCCESS);
export const fetchDataFailure = createAction<string>(FETCH_DATA_FAILURE);
