import { getItem } from './task.js';

const list = document.querySelector('.todos');

class UI {
  static add() {
    const data = getItem();
    list.innerHTML = '';
    data.forEach((item) => {
      const markup = `
    <li class="task form-check row d-flex">
      <input class="col-2 check-box form-check-input" id="${item.index}" type="checkbox" ${item.completed ? 'checked' : ''} />
      <input class="text" type="text"/>
      <textarea class="col content-task text-dark" id="${item.index}">${item.description}</textarea>
      <button class="col-1 btn-dots" id="${item.index}"></button>
      <button class="col-1 btn-trash hide" id="${item.index}"></button>
    </li>`;
      list.insertAdjacentHTML('beforeend', markup);
    });
    document.querySelectorAll('.check-box').forEach((el) => {
      el.addEventListener('change', () => {
        const itemToChange = data.find((item) => item.index === Number(el.id));
        if (itemToChange.completed) {
          itemToChange.completed = false;
          el.parentElement.children[2].classList.remove('strike');
        } else {
          itemToChange.completed = true;
          el.parentElement.children[2].classList.add('strike');
        }
        localStorage.setItem('item', JSON.stringify(data));
      });
    });
  }
  //  Checking the all checkboxes and inside the cheks of
  //   forEach and if find the checked remove the parent

  static delete() {
    let data = getItem();
    // filter thru the arr and removing the  //checked from the Localstorage
    // And then display the items and localStorage again
    data = data.filter((item) => item.completed === false);
    for (let i = 0; i < data.length; i += 1) {
      data[i].index = i + 1;
    }
    localStorage.setItem('item', JSON.stringify(data));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    list.innerHTML = '';
    data.forEach((item) => {
      const markup = `
      <li class="task form-check row d-flex">
        <input class="col-2 check-box form-check-input" id="${item.index}" type="checkbox" ${item.completed ? 'checked' : ''} />
        <input class="text" type="text"/>
        <textarea class="col content-task text-dark">${item.description}</textarea>
        <button class="col-1 btn-dots" id="${item.index}"></button>
        <button class="col-1 btn-trash" id="${item.index}"></button>
      </li>`;
      list.insertAdjacentHTML('beforeend', markup);
    });
    document.querySelectorAll('.check-box').forEach((el) => {
      el.addEventListener('change', () => {
        const itemToChange = data.find((item) => item.index === Number(el.id));
        if (itemToChange.completed) itemToChange.completed = false;
        else itemToChange.completed = true;
        localStorage.setItem('item', JSON.stringify(data));
      });
    });
  }

  static inputs() {
    const data = getItem();
    let btnDots = document.querySelectorAll('.btn-dots');
    let btnTrash = document.querySelectorAll('.btn-trash');
    list.addEventListener('click', (e) => {
      btnTrash = document.querySelectorAll('.btn-trash');
      btnDots = document.querySelectorAll('.btn-dots');
      const ind = Number(e.target.id - 1);
      btnDots[ind].classList.add('hide');
      btnTrash[ind].classList.remove('hide');
      btnTrash[ind].addEventListener('mousedown', () => {
        UI.delete();
      });
      list.addEventListener('keyup', (f) => {
        if (f.target.tagName.toLowerCase() === 'textarea') {
          const itemToChange = data.find((item) => item.index === Number(f.target.id));
          itemToChange.description = f.target.value;
          localStorage.setItem('item', JSON.stringify(data));
        }
      });
      list.addEventListener('focusout', (l) => {
        btnTrash = document.querySelectorAll('.btn-trash');
        btnDots = document.querySelectorAll('.btn-dots');
        const ind = Number(l.target.id - 1);
        btnDots[ind].classList.remove('hide');
        btnTrash[ind].classList.add('hide');
      });
    });
  }
}
UI.inputs();
export default UI;
