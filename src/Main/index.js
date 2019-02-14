import React, {Component} from 'react';
import Users from '../Users';
import Form from '../Form';
import usersList from '../usersList';

export default class Main extends Component {
   
    state = {
        chooseUserID: null,
        arrListOfUser: usersList.slice()
    }

     render(){ 
        return (
            <div className="container">
                  <div className="row">
                     <div className="col"><Users chooseUserIDMain={this.chooseUserIDMain.bind(this)} listOfUser={this.state.arrListOfUser}/></div>
                     <div className="col"><Form userId={this.state.chooseUserID}  listOfUser={this.state.arrListOfUser} mainSetState={this.mainSetState}/></div>
                 </div>
              </div>
        )
    }

    chooseUserIDMain = (chooseUserID) => {
        this.setState({
            chooseUserID: this.state.chooseUserID === chooseUserID ? null : chooseUserID
        })
    }

    mainSetState = (index,  data) => {

        let arr = this.state.arrListOfUser.slice();

        if (index !== null && data) {
            arr[index] = data;
        } else {
            if (data) {
                arr.push(data);
            } else {
                arr.splice(index, 1);
            }
        }

        this.setState({
            arrListOfUser:arr.slice()
        })
    }

}