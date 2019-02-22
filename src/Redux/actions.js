import {ACTION_ADD_USER, ACTION_UPDATE_USER, ACTION_DELETE_USER} from './index';

export const addNewUser = userData => {
    console.log('add');
    return {
        type: ACTION_ADD_USER,
        payload: userData
    }
}

export const updateUser = (index, userData ) => {
    return {
        type: ACTION_UPDATE_USER,
        payload: {
            userData: userData,
            index: index
        }
    }
}

export const deleteUser = userIndex => {
    return {
        type: ACTION_DELETE_USER,
        payload: userIndex
    }
}
