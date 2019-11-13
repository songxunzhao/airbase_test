import React from 'react'
import Currency from 'react-currency-formatter'
import Card from 'components/card'
import Avatar from 'components/avatar'
import {formatCurrency} from 'utils/currency'
import './index.scss'

function FormItem(props) {
    return (
        <div className={`container-fluid form-item ${props.className}`}>
            <div className="row">
                <div className={`form-item-label col ${props.labelClass}`}>
                    {props.label}
                </div>
                <div className={`form-item-content col ${props.contentClass}`}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

FormItem.defaultProps={
    labelClass: "col-3",
    contentClass: "col-9",
    className: ""
}

function RequestConfirmForm(props) {
    const request = props.request
    const annualCost = request.cost * 12
    let filePath = "", fileName = ""
    if (request.files.length > 0) {
        filePath = request.files[0];
        fileName = filePath.substring(filePath.lastIndexOf('/') + 1)
    }
    return (
        <div>
            <Card className="vertical-list">
                <div className="list-item">
                    <FormItem label={
                        "Requested by"
                    } content={
                        <span>
                            <Avatar image={request.requested_by.profile_picture}/>&nbsp;&nbsp;
                            {request.requested_by.first_name} {request.requested_by.last_name}
                        </span>
                    } />
                </div>
                <div className="list-item">
                    <FormItem label={
                        <span>Cost</span>
                    } content = {
                        formatCurrency(request.cost)
                    }/>
                </div>
                <div className="list-item list-md-item">
                    <FormItem label={
                        "Renewal Frequency"
                    } content={
                        <span>{request.renewal_frequency_in_months} month</span>
                    } labelClass="col-md-6 col-3" contentClass="col-md-6 col-9"/>
                </div>
                <div className="list-item list-md-item">
                    <FormItem label={
                        "Annual Cost"
                    } content={
                        formatCurrency(annualCost)
                    } labelClass="col-md-6 col-3" contentClass="col-md-6 col-9"/>
                </div>
                <div className="list-item">
                    <FormItem label={
                        "Expense Account"
                    } content={
                        <span>{request.expense_account}</span>
                    } />
                </div>
                <div className="list-item">
                    <FormItem label={
                        "File"
                    } content={
                        <span>
                        {filePath && 
                            <span>
                                <i className="color-success far fa-file-excel"/>&nbsp;&nbsp;
                                {fileName}
                            </span>
                        }
                        </span>
                    }/>
                </div>
                <div className="list-item">
                    <FormItem label={
                        "Description"
                    } content={
                        request.description
                    }/>
                </div>
            </Card>
            {
                request.service.usage_count > 0 && 
                <div className="mt-15">
                    <span className="color-danger">
                        {`Your company is already paying for ${request.service.name}.`}
                    </span>
                    <br/>
                    <span className="color-light-grey">
                        {`(${request.service.usage_count} instance owned by John Smith).`}
                    </span>
                </div>
            }
        </div>
    )
}

export default RequestConfirmForm