import localStorageMocks from "./__mocks__/localStorageMocks.js";

export default (arr) => {
  arr = arr.filter((elem) => elem.completed !== true);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  localStorageMocks.setItem('todoList', JSON.stringify(arr));
  return arr;
};