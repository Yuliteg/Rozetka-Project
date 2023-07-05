export const filterGoodsByPriceAndCheckbox = (state) => {
  const { filters, goods, priceFilter, priceFilterActive } = state;

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

    return priceFilterActive ? isPriceInRange && isActiveCheckboxFilter(item) : isActiveCheckboxFilter(item);
  });
};