import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import MainLayout from 'layout/main'
import Message from './message'
import RequestPanel from './request-panel'
import ajax from 'utils/ajax'

function ApprovalPage(props) {
    const [request, setRequest] = useState(null);

    ajax.get('/data/request1.json').then((response) => {
        setRequest(JSON.parse(response.responseText))
    }).catch(() => {
        setRequest(null);
    })
               
    const content = (
       request && <RequestPanel request={request}></RequestPanel>
    )

    const notification = (
        <Message category="security" type="warning">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
        </Message>
    )

    return (<MainLayout 
        notification={notification} 
        content={content}
    />)
}

export default ApprovalPage