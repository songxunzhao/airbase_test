import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function Panel(props) {
    return (
        <div className={`panel ${props.className}`}>
            <div className="panel-title">{props.title}</div>
            <div className="panel-body">{props.body}</div>
        </div>
    )
}

Panel.defaultProps = {
    className: ''
}

export default Panel