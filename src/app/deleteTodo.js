import localStorageMocks from './__mocks__/localStorageMocks.js';

export default (task, arr) => {
  const { index } = task;
  const currentArr = arr.filter((item) => item.index !== index);

  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }

  localStorageMocks.setItem('todoList', JSON.stringify(currentArr));
  return currentArr;
};