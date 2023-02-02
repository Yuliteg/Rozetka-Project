import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: '',
  bySeller: null,
}

export const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   sortByPrice: (state, { payload }) => {
    state.sort = payload;
   },
   addSellerFilter: (state, action) => {
    state.bySeller = action.payload;
   },
   removeSellerFilter: (state, action) => {
    state.bySeller = null;
   },
   clearFilters: (state) => {
    state.sort = '';
   }
  }
});

export const { sortByPrice, clearFilters, addSellerFilter, removeSellerFilter } = filterSlice.actions;
export default filterSlice.reducer;
