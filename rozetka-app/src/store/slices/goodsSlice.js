import { createSlice } from '@reduxjs/toolkit';
import { getGoods } from '../../helpersFunction/getGoods';

const initialState = {
  isError: false,
  isLoading: false,
  error: '',
  goods: [],
  goodsFiltered: [],
  goodsCategory: [],
  price: [],
}

export const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortByPriceUp: (state) => {
      state.goods = [...state.goodsFiltered.sort(
        (curr, next) => curr.price - next.price
      ),
      ]  
    },
    sortByPriceDown: (state) => {
      state.goods = [...state.goodsFiltered.sort(
        (curr, next) => next.price - curr.price
      ),
      ]  
    },
    sortByRating: (state) => {
      state.goods = [...state.goodsFiltered.sort(
        (curr, next) => next.rate - curr.rate
      ),
      ]  
    },
    addSellerFilter: (state, {payload}) => {
      state.bySeller = payload
      state.goods = [...state.goodsFiltered.filter(
        (el) => payload.includes(el.seller))]
    },
    removeSellerFilter: (state, {payload}) => {
       state.goods = payload
    },
  },
  extraReducers: {
    [getGoods.pending]: (state) => {
      state.isLoading = true
    },
    [getGoods.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.goods = payload
      state.goodsCategory = payload
      state.goodsFiltered = payload
    },
    [getGoods.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.error.message;
    },
  },
});


export const {
  goods,
  sortByPriceUp,
  sortByPriceDown,
  sortByRating,
  clearFilters,
  addSellerFilter,
  removeSellerFilter,
  addCountryFilter,
  removeCountryFilter,
  addBrandFilter,
  removeBrandFilter,
  addPrice } = filterSlice.actions;
export default filterSlice.reducer;
