// basicamente transforma um array de objetos em um array de arrays
const data = [
  {
    key: 'cliente',
    value: 'sim',
  },
  {
    key: 'telefone',
    value: '12982630081',
  },
  {
    key: 'Produto',
    value: 'Iphone',
  },
  {
    key: 'Problema',
    value: 'Null',
  },
  {
    key: 'Nome',
    value: 'João',
  },
  {
    key: 'Email',
    value: 'joaopfsiqueiraa@gmail.com',
  },
];

console.log(data);
console.log(data.map(Object.values));
