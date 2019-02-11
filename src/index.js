import React from 'react'
import {render} from 'react-dom'

function HelloWorld (){
    return (
        <div>
            <h1>Hellow world</h1>
        </div>
        )
}

render('<HelloWorld/>', document.getElementById('root'))