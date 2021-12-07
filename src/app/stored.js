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

  // static removeItem(task) {
  //   const list = Store.getItem();
  //   list = parseInt(task, 10);
  //   let newArr = [];
  //   list.forEach((task, index) => {
  //     if(item.)
  //   }
  // }
}
export default Store;