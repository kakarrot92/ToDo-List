// import { data } from 'jquery';
import Store from './stored.js';

const list = document.querySelector('.todos');

class UI {
  static add() {
    const data = Store.getItem();
    list.innerHTML = '';
    data.forEach((item) => {
      const markup = `
    <li class="task form-check row d-flex">
      <input class="col-2 check-box form-check-input" id="${item.index}" type="checkbox" ${item.completed ? 'checked' : ''} />
      <input class="text" type="text"/>
      <textarea class="col content-task text-dark" id="${item.index}">${item.description}</textarea>
      <button class="col-1 btn-dots" id="${item.index}"></button>
    </li>`;
      list.insertAdjacentHTML('beforeend', markup);
    });
    document.querySelectorAll('.check-box').forEach((el) => {
      el.addEventListener('change', () => {
        const itemToChange = data.find((item) => item.index === el.id);
        if (itemToChange.completed) itemToChange.completed = false;
        else itemToChange.completed = true;
        localStorage.setItem('item', JSON.stringify(data));
      });
    });
  }
  //  Checking the all checkboxes and inside the cheks of
  //   forEach and if find the checked remove the parent

  static delete() {
    let data = Store.getItem();
    // filter thru the arr and removing the  //checked from the Localstorage
    // And then display the items and localStorage again
    data = data.filter((item) => item.completed === false);
    localStorage.setItem('item', JSON.stringify(data));
    list.innerHTML = '';
    data.forEach((item) => {
      const markup = `
      <li class="task form-check row d-flex">
        <input class="col-2 check-box form-check-input" id="${item.index}" type="checkbox" ${item.completed ? 'checked' : ''} />
        <input class="text" type="text"/>
        <textarea class="col content-task text-dark">${item.description}</textarea>
        <button class="col-1 btn-dots" id="${item.index}"></button>
      </li>`;
      list.insertAdjacentHTML('beforeend', markup);
    });
    document.querySelectorAll('.check-box').forEach((el) => {
      el.addEventListener('change', () => {
        const itemToChange = data.find((item) => item.index === el.id);
        if (itemToChange.completed) itemToChange.completed = false;
        else itemToChange.completed = true;
        localStorage.setItem('item', JSON.stringify(data));
      });
    });
  }

  static inputs() {
    const data = Store.getItem();
    list.addEventListener('change', (e) => {
      if (e.target.tagName.toLowerCase() === 'textarea') {
        const itemToChange = data.find((item) => item.index === e.target.id);
        itemToChange.description = e.target.value;
        localStorage.setItem('item', JSON.stringify(data));
      }
    });
  //   const textArea = document.querySelectorAll('.content-task').forEach(() => {
  //     textArea.addEventListener('change', () => {
  //       alert('hello');
  //     });
  //   });
  // }
  }
}
UI.inputs();
export default UI;
