// reducers/dataReducer.ts
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataSuccess, fetchDataFailure, buttonClick } from '../actions/actionTypes';
import { IProduct } from '../../types/products/type';

interface DataState {
  data: IProduct[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(buttonClick, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchDataSuccess, (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchDataFailure, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default dataReducer;
