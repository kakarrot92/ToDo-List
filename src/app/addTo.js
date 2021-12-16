import localStorageMocks from './__mocks__/localStorageMocks.js';

export default (tasks, todo) => {
  tasks.push({
    index: tasks.length + 1,
    description: todo,
    completed: false,
  });

  localStorageMocks.setItem('todoList', JSON.stringify(tasks));
};