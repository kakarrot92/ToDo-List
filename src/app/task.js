export function getItem() {
  let item;
  if (!localStorage.getItem('item')) {
    item = [];
  } else {
    item = JSON.parse(localStorage.getItem('item'));
  }
  return item;
}

export function create(description) {
  const data = getItem();
  data.push(
    {
      description,
      completed: false,
      index: data.length + 1,
    },
  );
  return data;
}
