import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function Avatar(props) {
    return (
        <span className="avatar">
            <img src={props.image}/>
        </span>
    )
}

export default Avatar;