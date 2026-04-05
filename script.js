const add_item = document.getElementById('add_item');
const button = document.getElementById('button');
const list = document.getElementById('list');

const itemNames = []; // Lista de nomes dos itens adicionados

// Adicionar item à lista
button.addEventListener('click', (event) => {
  event.preventDefault();

  const itemName = add_item.value.trim();
  if (!itemName) return;

  itemNames.push(itemName);
  console.log(itemNames)

  const newLi = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.name = 'item';

  const span = document.createElement('span');
  span.textContent = itemName;

  const link = document.createElement('a');
  link.href = '#';

  const img = document.createElement('img');
  img.src = './assets/remove.svg';
  img.alt = 'Remover item';

  link.appendChild(img);
  newLi.append(checkbox, span, link);

  list.append(newLi);
  add_item.value = '';
});

// Permitir apenas letras e espaços no campo de entrada
add_item.addEventListener('input', () => {
  add_item.value = add_item.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
});

console.log(itemNames)


