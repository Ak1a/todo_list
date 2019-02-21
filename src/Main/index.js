import React, {PureComponent} from 'react';
import Users from '../Users';
import Form from '../Form';

class Main extends PureComponent {
   
    state = {
        chooseUserID: null,
    }

    
    chooseUserIDMain = (chooseUserID) => {
        this.setState({
            chooseUserID: this.state.chooseUserID === chooseUserID ? null : chooseUserID
        })
    }

    mainSetState = (index,  data) => {

        if (index !== null && data) {
            this.props.updateUser(index, data);
        } else {
            if (data) {
                this.props.addNewUser(data);
            } else {
                this.props.deleteUser(index);
            }
        }

    }

    render(){ 
        return (
            <div className="container">
                  <div className="row">
                     <div className="col">
                        <Users
                            chooseUserIDMain={this.chooseUserIDMain.bind(this)}
                            listOfUser={this.props.arrListOfUser}
                        />
                     </div>
                     <div className="col">
                        <Form
                            userId={this.state.chooseUserID}
                            listOfUser={this.props.arrListOfUser}
                            mainSetState={this.mainSetState}
                        />
                     </div>
                 </div>
              </div>
        )
    }

}

export default Main;