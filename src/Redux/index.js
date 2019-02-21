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

const reducer = (state = initialState, action) => {
    let arr = state.arrListUser.slice();

    switch (action.type) {
         case ACTION_ADD_USER:
         arr.push(action.payload)

         return { ...state, arrListUser: arr}

         case ACTION_UPDATE_USER:
         arr[action.payload.index] = action.payload.userData

         return { ...state, arrListUser: arr}

         case ACTION_DELETE_USER:
         arr.splice(action.payload, 1)

         return { ...state, arrListUser: arr}
        
         default: return state;
    }
}


const newReducer = handleActions({
    ACTION_ADD_USER: (state, action) => { return { ...state, arrListUser: state.arrListUser.push(action.payload) }},
    ACTION_UPDATE_USER: (state, action) => ({ ...state, arrListUser: state.arrListUser[action.payload.index] = action.payload.userData }),
    ACTION_DELETE_USER: (state, action) => ({ ...state, arrListUser: state.arrListUser.splice(action.payload, 1) }),

}, initialState)

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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

export default Redux;