import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function MainLayout(props) {
    return (
        <div className="page">
            <header className="header">
                <img className="logo" src="https://global-uploads.webflow.com/5c6e833a1c5eeea6aae829c2/5c6e9479e965e2b19617b4e2_airbase-logo-rgb-02.svg"></img>
            </header>
            <section className="notification">{props.notification}</section>
            <section className="content">
                {props.content}
            </section>
        </div>
    )
}

export default MainLayout