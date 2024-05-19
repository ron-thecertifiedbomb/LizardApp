// dataSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  isLoading: boolean;
  isError: boolean;
  data: any[] | null;
  error: string | null;
  filteredData: any[] | null;
}

const initialState: DataState = {
  isLoading: false,
  isError: false,
  data: null,
  error: null,
  filteredData: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    storeData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
    filterData(state, action: PayloadAction<string>) {
      const category = action.payload;
      if (state.data) {
        if (category === 'All') {
          state.filteredData = state.data;
        } else {
          state.filteredData = state.data.filter(
            item => item.name === category,
          );
        }
      }
    },
  },
});

export const {storeData, filterData} = dataSlice.actions;

export default dataSlice.reducer;
