import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function CheckButton(props) {
    const [checked, setChecked] = useState(props.checked)

    return (
        <button 
            className={'btn btn-icon ' + props.className} 
            onClick={() => {setChecked(!checked)}}>
            {checked 
                ? <i className="fas fa-check-circle"></i>
                : <i className="far fa-circle"></i>
            }
        </button>
    )
}

export {CheckButton}