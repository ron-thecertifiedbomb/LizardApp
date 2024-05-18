// dataSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  isLoading: boolean;
  isError: boolean;
  data: any[] | null; // Adjust the type as per your fetched data structure
  error: string | null;
  filteredData: any[] | null; // New state for filtered data
}

const initialState: DataState = {
  isLoading: false,
  isError: false,
  data: null,
  error: null,
  filteredData: null, // Initialize filteredData as null
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<any[]>) {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
      state.filteredData = action.payload; // Initialize filteredData with fetched data
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    filterData(state, action: PayloadAction<string>) {
      const category = action.payload;
      if (state.data) {
        if (category === 'All') {
          state.filteredData = state.data; // If category is 'All', set filteredData as all data
        } else {
          state.filteredData = state.data.filter((item) => item.category === category); // Filter data based on category
        }
      }
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, filterData } = dataSlice.actions;

export default dataSlice.reducer;
