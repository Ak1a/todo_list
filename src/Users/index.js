import React, {Component} from 'react';
import User from '../User'

export default class Users extends Component {
    
    state = {
        chooseUserID: null,
    }

    render (){
        const userEl = this.props.listOfUser.map((user, index) => 
            <li className={(this.state.chooseUserID === index) ? "list-group-item active" : "list-group-item"} key={index}  ><User user={user} chooseUser={this.chooseUser.bind(this, index)} /></li>
        )

        return (
            <ul className="list-group">
                {userEl}
            </ul>
        )
    }

    chooseUser = chooseUserIDargs => {
        this.setState({
            chooseUserID: this.state.chooseUserID === chooseUserIDargs ? null : chooseUserIDargs
        });
        this.props.chooseUserIDMain(chooseUserIDargs);
    }
}