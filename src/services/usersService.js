const users = [
  {
    name: 'Jhon',
    last_name: 'Lenon',
    age: 24
  },
  {
    name: 'Paul',
    last_name: 'Wolker',
    age: 22
  },
  {
    name: 'Elton',
    last_name: 'Jhon',
    age: 64
  }
];

const DELAY = 500;

export const getUsers = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(users);
  }, DELAY);
});

export const removeUser = name => new Promise(resolve => {
  const users = users.filter(_ => _.name !== name);
  setTimeout(() => {
    resolve(users);
  }, DELAY);
});