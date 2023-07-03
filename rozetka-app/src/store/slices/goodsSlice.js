import { createSlice } from '@reduxjs/toolkit';
import { fetchGoods } from '../../helpersFunction/getGoods';

const initialState = {
  isError: false,
  isLoading: false,
  error: '',
  goods: [],
  filteredGoods: [],
  filters: {
    seller: [],
    country: [],
    brand: [],
  },
  sort: '',
}

export const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSortOption: (state, { payload }) => {
      state.sort = payload;
    },
    sortByPriceUp: (state) => {
      state.filteredGoods = [...state.filteredGoods.sort((curr, next) => curr.price - next.price)];
    },
    sortByPriceDown: (state) => {
      state.filteredGoods = [...state.filteredGoods.sort((curr, next) => next.price - curr.price)];
    },
    sortByRating: (state) => {
      state.filteredGoods = [...state.filteredGoods.sort((curr, next) => next.rate - curr.rate)];
    },

    addFilter: (state, { payload }) => {
      const filteredGoodsCopy = [...state.goods];
      const { filterType, value } = payload;

      state.filters[filterType] = [...state.filters[filterType], value];

      const activeFilters = state.filters;

      state.filteredGoods = filteredGoodsCopy.filter((item) => {
        for (const filterType in activeFilters) {
          if (activeFilters[filterType].length > 0 && !activeFilters[filterType].includes(item[filterType])) {
            return false;
          }
        }
        return true;
      });
    },
    removeFilter: (state, { payload }) => {
      const filteredGoodsCopy = [...state.goods];
      const { filterType, value } = payload;

      state.filters[filterType] = state.filters[filterType].filter((el) => el !== value);

      const activeFilters = state.filters;

      state.filteredGoods = filteredGoodsCopy.filter((item) => {
        for (const filterType in activeFilters) {
          if (activeFilters[filterType].length > 0 && !activeFilters[filterType].includes(item[filterType])) {
            return false;
          }
        }
        return true;
      });
    },
  },
  extraReducers: {
    [fetchGoods.pending]: (state) => {
      state.isLoading = true
    },
    [fetchGoods.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.goods = payload
      state.filteredGoods = payload;
    },
    [fetchGoods.rejected]: (state, action) => {
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
  setSortOption,
  addFilter,
  filteredGoods,
  removeFilter,
  addPriceFilter
} = filterSlice.actions;

export default filterSlice.reducer;
