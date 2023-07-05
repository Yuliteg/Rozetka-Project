import { filterGoodsByPriceAndCheckbox } from "./filterGoodsByPriceCheckbox";

export const applyFilters = (state) => {
  let filteredGoods = [...state.goods];

  // Apply checkbox filters
  const activeFilters = state.filters;
  filteredGoods = filteredGoods.filter((item) => {
    for (const filterType in activeFilters) {
      if (activeFilters[filterType].length > 0 && !activeFilters[filterType].includes(item[filterType])) {
        return false;
      }
    }
    return true;
  });

  // Apply price filter if active
  if (state.priceFilterActive) {
    filteredGoods = filterGoodsByPriceAndCheckbox({ ...state, filteredGoods });
  }

  return filteredGoods;
};
