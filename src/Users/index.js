import React, {Component} from 'react';
import usersList from '../usersLisr';
import User from '../User'

export default class Users extends Component {
    
    state = {
        chooseUserID: null
    }

    render (){
        const userEl = usersList.map(user => 
            <li className={(this.state.chooseUserID === user.id) ? "list-group-item active" : "list-group-item"} key={user.id}  ><User user={user} chooseUser={this.chooseUser.bind(this, user.id)} /></li>
        )

        return (
            <ul className="list-group">
                {userEl}
            </ul>
        )
    }

    chooseUser = chooseUserID => this.setState({
        chooseUserID: this.state.chooseUserID === chooseUserID ? null : chooseUserID
    })
}