import React, {Component} from 'react';
import Main from './Main';
import  {createStore, bindActionCreators} from 'redux';
import usersList from '../usersList';
import {connect, Provider} from 'react-redux;'

const initialState = usersList.slice();
const store = createStore(reducer);
const ACTION_ADD_USER = 'ACTION_ADD_USER';
const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER';
const ACTION_DELETE_USER = 'ACTION_DELETE_USER';


const addNewUser = userData => {
    return {
        type: ACTION_ADD_USER,
        payload: userData
    }
}

const updateUser = (userData, index) => {
    return {
        type: ACTION_UPDATE_USER,
        payload: {
            userData: userData,
            index: index
        }
    }
}

const deleteUser = userIndex => {
    return {
        type: ACTION_DELETE_USER,
        payload: userIndex
    }
}

const reducer = (state = initialState, action) => {

    switch (action){
         case ACTION_ADD_USER:
         return [ ...state, state.push(action.payload)]

         case ACTION_UPDATE_USER:
         return
    }
    
    return state;
}

const putStateToProps = state => {
    return { arrListOfUser: initialState }
}

const saveActionToProps = dispatch => {
    return {
        addNewUser: bindActionCreators(addNewUser, dispatch),
        updateUser: bindActionCreators(updateUser, dispatch),
        deleteUser: bindActionCreators(deleteUser, dispatch)
    }
}
const WrappedMainComponent = connect(putStateToProps, saveActionToProps)(Main);

class Redux extends Comment {

    render(){
        return (
            <Provider store={store}>
                <WrappedMainComponent />
            </Provider>
        )
    }
}