function filterArrayObject(array, query) {
  if (array && array.length > 0 && query) {
    return array.filter((item) =>
      Object.values(item).some((value) => value.toString().toLowerCase().includes(query.toLowerCase()))
    );
  }
  if (array && array.length > 0) return array;
  return [];
}

export { filterArrayObject };
