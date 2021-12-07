import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Store from './app/stored.js';
import Task from './app/task.js';

import UI from './app/ui.js';

UI.add();
const clearBtn = document.querySelector('.footer');
const addBtn = document.querySelector('.btn-add');
const newTask = document.querySelector('.inputTask');
clearBtn.addEventListener('click', UI.delete);
addBtn.addEventListener('click', () => {
  const task = new Task(newTask.value);
  Store.addItem(task);
  UI.add();
});
