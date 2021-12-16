import addTo from './addTo.js';
// eslint-disable-next-line import/no-unresolved
import deleteTodo from './deleteTodo.js';
import update from './updateTask.js';
import checkBox from './checkBoxItem.js';
import clearAllCompleted from './clearAllCompletedTask.js';

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
  test(' update', () => {
    arr.push({ completed: false, description: 'hello world', index: 1 });
    update(1, arr, 'hey');
    expect(arr[0].description).toBe('hey');
  });
  test('update completed status', () => {
    checkBox(arr);
    expect(arr[0].completed).toBe(true);
  });
  test('should clear all completed', () => {
    arr = clearAllCompleted(arr);
    expect(arr).toHaveLength(0);
  });
});