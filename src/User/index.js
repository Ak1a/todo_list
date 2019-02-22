import React from "react";

const User = ({user, chooseUser}) => {

    return(
        <div onClick={chooseUser}>
            <div> First name: {user.name} </div>
            <div> Last name: {user.last_name} </div>
            <div> Age: {user.age} </div>
        </div>
    )     
}

User.displayName = 'User';

export default User;