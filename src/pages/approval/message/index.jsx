import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function Message(props) {
    return (
        <div className="message">
            <span className="color-warning message_category"> <i className="fas fa-lock"></i> Security Message</span>
            <span className="message_content">
                {props.children}
            </span>
        </div>
    )
}

export default Message