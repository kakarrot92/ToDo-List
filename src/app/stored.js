import { create } from './task.js';

class Store {
  static addItem(task) {
    const data = create(task);
    localStorage.setItem('item', JSON.stringify(data));
  }
}
export default Store;