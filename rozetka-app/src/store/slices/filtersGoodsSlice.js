import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  sortValue: '',
  sort: ''
}

export const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   updateSort: (state, {payload}) => {
    state.sortValue = payload;
   },
   sortByPrice: (state, { payload }) => {
    state.sort = payload;
   },
   clearFilters: (state) => {
    state.sort = '';
   }
  }
});

export const { updateSort, sortValue, sortByPrice, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
