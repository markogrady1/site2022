const arrayToMatrix = (array, columns) =>
  Array(Math.ceil(array.length / columns))
    .fill('')
    .reduce((acc, cur, index) => {
      return [...acc, [...array].splice(index * columns, columns)];
    }, []);

export { arrayToMatrix };
