import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function Card(props) {
    return (<div className={`card ${props.className}`}>{props.children}</div>)
}
export default Card

Card.defaultProps = {
    className: ''
}