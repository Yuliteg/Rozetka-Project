export const getUniqueValues = (data, key) => {
    // let unique = data.map((item) => item[type])

    // return [ ...new Set(unique)]
    const set = new Set();

    data.forEach((item) => {
      const value = item[key]

      if (Array.isArray(value)) {
        value.forEach((v) => set.add(v));
      } else {
        set.add(value);
      }
    });
  
    return Array.from(set);
    }
  
