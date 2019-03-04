import { createSelector } from 'reselect';

const usersStore = state => state.users;

export const getUsers = createSelector(
  usersStore,
  store => ([...store.userList])
);

export const getSelectedUser = createSelector(
  usersStore,
  store => store.selectedUser
);

export const getInitialValues = createSelector(
  getUsers,
  getSelectedUser,
  (users, selectedUser) => {
    const name = '';
    const lastName = '';
    const age = null;
    const user = users.find(_ => _.name === selectedUser);
    return {
      name: user ? user.name : name,
      lastName: user ? user.lastName : lastName,
      age: user ? user.age: age
    }
  }
);