import React, {Component} from "react";

export default class User extends Component {

    render() {
        const {user, chooseUser} = this.props

        return(
            <div onClick={chooseUser}>
                <div> First name: {user.name} </div>
                <div> Last name: {user.last_name} </div>
                <div> Age: {user.age} </div>
            </div>
        )
    }
}