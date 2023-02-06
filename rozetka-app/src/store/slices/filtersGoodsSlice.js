import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: '',
  bySeller: null,
  byCountry: null,
  byBrand: null,
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
    addCountryFilter: (state, action) => {
      state.byCountry = action.payload;
    },
    removeCountryFilter: (state, action) => {
      state.byCountry = null;
    },
    addBrandFilter: (state, action) => {
      state.byBrand = action.payload;
    },
    removeBrandFilter: (state, action) => {
      state.byBrand = null;
    },
    clearFilters: (state) => {
      state.sort = '';
    }
  }
});

export const {
  sortByPrice,
  clearFilters,
  addSellerFilter,
  removeSellerFilter,
  addCountryFilter,
  removeCountryFilter,
  addBrandFilter,
  removeBrandFilter } = filterSlice.actions;
export default filterSlice.reducer;
