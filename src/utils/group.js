function groupBy(array, property) {
  if (array && property) {
    return array.reduce((result, item) => {
      const key = item[property];

      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(item);

      return result;
    }, []);
  }
  return null;
}

export { groupBy };
