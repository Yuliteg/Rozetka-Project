import { createSlice } from '@reduxjs/toolkit';
import { getGoods } from '../../helpersFunction/getGoods';

const initialState = {
  isError: false,
  isLoading: false,
  bySeller: [],
  byCountry: [],
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
      state.goods = [...state.goods.sort(
        (curr, next) => curr.price - next.price
      ),
      ]
    },
    sortByPriceDown: (state) => {
      state.goods = [...state.goods.sort(
        (curr, next) => next.price - curr.price
      ),
      ]
    },
    sortByRating: (state) => {
      state.goods = [...state.goods.sort(
        (curr, next) => next.rate - curr.rate
      ),
      ]
    },
    addSellerFilter: (state, { payload }) => {
      state.bySeller = payload
      if (!state.byCountry) {
        state.goods = [...state.goodsFiltered.filter(
          (el) => payload.includes(el.seller))]
      } else {
        state.goods = [...state.goodsFiltered.filter(
          (el) => payload.includes(el.seller) && state.byCountry.includes(el.country))]
      }
    },
    removeSellerFilter: (state, { payload }) => {
      state.bySeller = ''
      if (!state.byCountry) {
        state.goods = payload
      } else {
        state.goods = payload.filter(
          (el) => state.byCountry.includes(el.country))
      }
    },
    addCountryFilter: (state, { payload }) => {
      state.byCountry = payload
      if (!state.bySeller) {
        state.goods = [...state.goodsFiltered.filter(
          (el) => payload.includes(el.country))]
      } else {
        state.goods = [...state.goodsFiltered.filter(
          (el) => payload.includes(el.country) && state.bySeller.includes(el.seller))]
      }
    },
    removeCountryFilter: (state, { payload }) => {
      state.byCountry = ''
      if (!state.bySeller) {
        state.goods = payload
      } else {
        state.goods = payload.filter(
          (el) => state.bySeller.includes(el.seller))
      }
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
  addPrice,
  bySeller,
  byCountry } = filterSlice.actions;
export default filterSlice.reducer;
