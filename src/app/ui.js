import template from './template.js';

import data from './data.js';

const list = document.querySelector('.todos');

class UI {
  static add() {
    list.innerHTML = `
   ${data.map(template).join('')}
   `;
  }
  //  Checking the all checkboxes and inside the cheks of
  //   forEach and if find the checked remove the parent

  static delete() {
    const checks = document.querySelectorAll('.check-box');
    checks.forEach((check) => {
      if (check.checked) {
        const completedTask = check.parentElement;
        completedTask.remove();
      }
    });
  }

  static getItem() {
    let item;
    if (localStorage.getItem(item) === null) {
      item = [];
    } else {
      item = JSON.parse(localStorage.getItem('item'));
    }
    item.push();
    localStorage.setItem('item', JSON.stringify(item));
  }

//   static storeItem(add) {
//     const item = UI.getItem();
//     item.push(add);
//     localStorage.setItem('item', JSON.stringify(item));
//   }
}
export default UI;
