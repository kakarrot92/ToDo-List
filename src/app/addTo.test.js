import addTo from './addTo.js';
// eslint-disable-next-line import/no-unresolved

describe(' Should add item', () => {
  let arr = [];
  const todoStr = 'test';
  // addTodo test
  test('addTo', () => {
    addTo(arr, todoStr);
    expect(arr).toHaveLength(1);
    expect(arr[0].description).toBe('test');
  });
});