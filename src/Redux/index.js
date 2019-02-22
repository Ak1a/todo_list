import React from 'react';
import Main from '../Main';
import  {createStore, bindActionCreators} from 'redux';
import usersList from '../usersList';
import {connect, Provider} from 'react-redux'
import {addNewUser, updateUser, deleteUser} from './actions';
import {handleActions} from 'redux-actions';

export const ACTION_ADD_USER = 'ACTION_ADD_USER';
export const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER';
export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';

const initialState = {
    arrListUser: usersList.slice()
};

const newReducer = handleActions({
    [ACTION_ADD_USER]: (state, {payload}) => { 
        let arr = state.arrListUser.slice();
        arr.push(payload);

        return { ...state, arrListUser: arr}
    },

    [ACTION_UPDATE_USER]: (state, {payload: {userData, index}}) => {
        let arr = state.arrListUser.slice();
        arr[index] = userData;

       return { ...state, arrListUser: arr }},

    [ACTION_DELETE_USER]: (state, {payload}) => { 
        let arr = state.arrListUser.slice();
        arr.splice(payload, 1);

        return { ...state, arrListUser: arr }
    },

}, initialState)

const store = createStore(newReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const putStateToProps = (state) => {
    return { arrListOfUser: state.arrListUser }
}

const saveActionToProps = (dispatch) => {
    return {
        addNewUser: bindActionCreators(addNewUser, dispatch),
        updateUser: bindActionCreators(updateUser, dispatch),
        deleteUser: bindActionCreators(deleteUser, dispatch)
    }
}

const WrappedMainComponent = connect(putStateToProps, saveActionToProps)(Main);

const Redux = () => {
    
    return (
        <Provider store={store}>
            <WrappedMainComponent />
        </Provider>
    )
    
}

Redux.displayName = 'Redux';

export default Redux;