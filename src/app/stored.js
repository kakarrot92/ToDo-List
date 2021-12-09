class Store {
  static getItem() {
    let item;
    if (!localStorage.getItem('item')) {
      item = [];
    } else {
      item = JSON.parse(localStorage.getItem('item'));
    }
    return item;
  }

  static addItem(task) {
    const list = Store.getItem();
    list.push(task);
    localStorage.setItem('item', JSON.stringify(list));
  }
}
export default Store;