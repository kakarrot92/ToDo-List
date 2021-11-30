function template(data) {
  return `
  <li class="task form-check row d-flex">
    <input class="col-2 check-box form-check-input" type="checkbox" ${data.completed ? 'checked' : ''} />
    <span class="col content-task text-dark">${data.description}</span>
    <button class="col-1 btn-dots" id="${data.index}"></button>
  </li>
`;
}
export default template;