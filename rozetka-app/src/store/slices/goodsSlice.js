import { createSlice } from '@reduxjs/toolkit';
import { fetchGoods } from '../../helpersFunction/getProd';

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
  priceFilter: [0, 21999],
}

const filterGoodsByPriceAndCheckbox = (state) => {
  const { filters, goods, priceFilter } = state;

  return goods.filter((item) => {
    const isPriceInRange = item.price >= priceFilter[0] && item.price <= priceFilter[1];

    const isActiveCheckboxFilter = (item) => {
      for (const filterType in filters) {
        if (filters[filterType].length > 0 && !filters[filterType].includes(item[filterType])) {
          return false;
        }
      }
      return true;
    };

    return isPriceInRange && isActiveCheckboxFilter(item);
  });
};

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
      state.priceFilter = payload;
      state.filteredGoods = filterGoodsByPriceAndCheckbox(state);
    },

    addCheckboxFilter: (state, { payload }) => {
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
    removeCheckboxFilter: (state, { payload }) => {
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

      const noActiveFilters = Object.values(activeFilters).every((filterArr) => filterArr.length === 0);
      if (noActiveFilters) {
        state.sort = 'without-sorting';
        state.filteredGoods = [...state.goods];
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
