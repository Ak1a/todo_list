import React, {Component} from 'react'
import {render} from 'react-dom'

class User extends Component{
render(){
        return (
            <div>
                <h1>Hellow world</h1>
            </div>
            )
    }
}

render(<User/>, document.getElementById('root'))