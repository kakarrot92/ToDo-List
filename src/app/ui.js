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
}
export default UI;
