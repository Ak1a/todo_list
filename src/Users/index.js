import React, {PureComponent} from 'react';
import User from '../User'

 class Users extends PureComponent {
    
    state = {
        chooseUserID: null,
    }

    static displayName = 'Users';
    
    render (){
        const userEl = this.props.listOfUser.map((user, index) => 
            <li 
                className={(this.state.chooseUserID === index) ? "list-group-item active" : "list-group-item"} 
                key={user.name + user.last_name} >
                <User 
                    user={user} 
                    chooseUser={this.chooseUser.bind(this, index)} />
            </li>
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

export default Users;