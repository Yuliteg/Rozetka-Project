import { createSlice } from '@reduxjs/toolkit';
import { fetchGoods } from '../../helpersFunction/getProd';
import { filterGoodsByPriceAndCheckbox } from '../../helpersFunction/filterGoodsByPriceCheckbox';
import { applyFilters } from '../../helpersFunction/applyFilters';

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
  priceFilterActive: false,
  priceFilter: [0, 21999],
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
    withoutSorting: (state) => {
      state.filteredGoods = [...state.goods];
    },

    addPriceFilter: (state, { payload }) => {
      state.priceFilterActive = true;
      state.priceFilter = payload;

      // Apply the price and checkbox filters
      state.filteredGoods = filterGoodsByPriceAndCheckbox(state);
    },

    addCheckboxFilter: (state, { payload }) => {
      const { filterType, value } = payload;

      // Add the new checkbox filter to the filters state
      state.filters[filterType] = [...state.filters[filterType], value];

      state.filteredGoods = applyFilters(state)
    },
    removeCheckboxFilter: (state, { payload }) => {
      const { filterType, value } = payload;

      // Remove the checkbox filter from the filters state
      state.filters[filterType] = state.filters[filterType].filter((el) => el !== value);

      // Update the filteredGoods state based on the remaining active checkbox filters
      state.filteredGoods = filterGoodsByPriceAndCheckbox(state);

      // Check if there are any active checkbox filters left
      const activeCheckboxFilters = Object.values(state.filters).some((filterArr) => filterArr.length > 0);

      if (!activeCheckboxFilters) {
        // If there are no active checkbox add without sorting
        state.sort = 'without-sorting';
        // If there are no active checkbox filters left, reapply the price filter
        state.filteredGoods = filterGoodsByPriceAndCheckbox(state);
      }
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
  withoutSorting,
  sortByPriceUp,
  sortByPriceDown,
  sortByRating,
  setSortOption,
  filteredGoods,
  addCheckboxFilter,
  removeCheckboxFilter,
  addPriceFilter
} = filterSlice.actions;

export default filterSlice.reducer;
