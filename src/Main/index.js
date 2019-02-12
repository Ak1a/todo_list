import React, {Component} from 'react';
import Users from '../Users';

export default class Main extends Component {
   
    state = {
        choosUserId: null
    }

     render(){ 
        return (
            <div className="container">
                  <div className="row">
                     <div className="col"><Users chooseUserID={this.chooseUserID.bind(this)}/></div>
                     <div className="col"></div>
                 </div>
              </div>
        )
    }

    chooseUserID = (chooseUserID) => this.setState({
        chooseUserID: this.state.chooseUserID === chooseUserID ? null : chooseUserID
    })

}