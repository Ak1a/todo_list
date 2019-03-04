import { handleActions } from "redux-actions";
import { resetSelectedUser, getUserListAsync, selectUser } from './actions';

const initialState = {
  userList: [],
  selectedUser: null
};

const handleResetSelectedUser = state => ({
  ...state,
  selectedUser: null
});

const handleGetUserListAsync = (state, { payload }) => ({
  ...state,
  userList: payload
});

const handleSelectUser = (state, { payload }) => ({
  ...state,
  selectedUser: payload
});

export default handleActions({
  [resetSelectedUser]: handleResetSelectedUser,
  [selectUser]: handleSelectUser,
  [getUserListAsync.success]: handleGetUserListAsync
}, initialState);