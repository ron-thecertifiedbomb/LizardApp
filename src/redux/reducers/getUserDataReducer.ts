import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  data: any[] | null;
  // filteredData: any[] | null;
}

const initialState: DataState = {
  data: null,

  // filteredData: null,
};

const getUserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
    // filterUsersData(state, action: PayloadAction<string>) {
    //   const category = action.payload;
    //   if (state.data) {
    //     if (category === 'All') {
    //       state.filteredData = state.data;
    //     } else {
    //       state.filteredData = state.data.filter(
    //         item => item.name === category,
    //       );
    //     }
    //   }
    // },
  },
});

export const { usersData } = getUserData.actions;

export default getUserData.reducer;
