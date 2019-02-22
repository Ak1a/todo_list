import React from 'react';
import Main from '../Main';
import {createStore, bindActionCreators, combineReducers } from 'redux';
import usersList from '../usersList';
import {connect, Provider} from 'react-redux'
import {addNewUser, updateUser, deleteUser} from './actions';
import {handleActions} from 'redux-actions';
import {reducer as formReducer} from 'redux-form'

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

const rootReducer = combineReducers({
    form: formReducer,
    mainReducer: newReducer
  })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const mapStateToProps = (state) => {
    return { arrListOfUser: state.mainReducer.arrListUser }
}

const mapDispathcToProps = (dispatch) => {
    return {
        addNewUser: bindActionCreators(addNewUser, dispatch),
        updateUser: bindActionCreators(updateUser, dispatch),
        deleteUser: bindActionCreators(deleteUser, dispatch)
    }
}

const WrappedMainComponent = connect(mapStateToProps, mapDispathcToProps)(Main);

const Redux = () => {
    
    return (
        <Provider store={store}>
            <WrappedMainComponent />
        </Provider>
    )
    
}

Redux.displayName = 'Redux';

export default Redux;