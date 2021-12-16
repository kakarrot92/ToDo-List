import addTo from './addTo.js';
// eslint-disable-next-line import/no-unresolved
import deleteTodo from './deleteTodo.js';

describe(' Should add item', () => {
  let arr = [];
  const todoStr = 'test';
  // addTodo test
  test('addTo', () => {
    addTo(arr, todoStr);
    expect(arr).toHaveLength(1);
    expect(arr[0].description).toBe('test');
  });
  test('deleteTodo', () => {
    const todo = arr[0];
    arr = deleteTodo(todo, arr);
    expect(arr).toHaveLength(0);
  });
});