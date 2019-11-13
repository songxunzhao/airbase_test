import React from 'react';
import ApproverList from './approver-list';
import RequestSection from './request-section';
import Panel from 'components/panel'
import './index.scss'
function ServiceLogo(props) {
    return (
        <span className="service-logo">
            <img src={props.image}></img>
        </span>
    )
}

function RequestPanel(props) {
    const request = props.request;

    return (
        <Panel title={(
            <div>
                <ServiceLogo image={request.service.logo}></ServiceLogo>
                <span className="request-title">Request for {request.service.name} (#{request.id})</span>
            </div>
        )} body={
            <div className="row">
                <div className="col col-md-7 col-12 panel-md-list-item">
                    <RequestSection request={request}/>
                </div>
                <div className="col col-md-5 col-12 panel-md-list-item">
                    <ApproverList approvers={request.approvers}/>
                </div>
                <div className="mt-15 btn-group col-12">
                    <button className="btn btn-success">Approve</button>
                    <button className="btn btn-danger">Deny</button>
                </div>
            </div>
        } className="panel-md-list"
        />
    )
}

export default RequestPanel