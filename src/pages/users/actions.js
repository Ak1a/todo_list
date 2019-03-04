import { createAction } from "redux-actions";
import createAsyncAction from '../../helpers/createAsyncAction';

export const resetSelectedUser = createAction('resetSelectedUser');

export const { getUserListAsync } = createAsyncAction("getUserListAsync");

export const { removeUserAsync } = createAsyncAction('removeUserAsync');

export const selectUser = createAction('SELECT_USER');