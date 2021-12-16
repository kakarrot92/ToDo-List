import localStorageMocks from './__mocks__/localStorageMocks.js';

export default (arr) => {
  if (arr[0].completed === false) {
    arr[0].completed = true;
  } else {
    arr[0].completed = false;
  }
  localStorageMocks.setItem('todoList', JSON.stringify(arr));
};