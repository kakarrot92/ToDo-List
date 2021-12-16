import localStorageMocks from './__mocks__/localStorageMocks.js';

export default (id, arr, str) => {
  const todoObj = arr.find((x) => x.index === id);
  todoObj.description = str;
  localStorageMocks.setItem('todoList', JSON.stringify(todoObj));
};