import React from 'react'
import ReactDOM from 'react-dom'
import {CheckButton} from 'components/button'
import formatDate from 'intl-dateformat'
import Avatar from 'components/avatar'
import './index.scss'

function ApproverCategoryRow(props) {
    return (
        <div className="approver-category-row">{props.category}</div>
    )
}

function ApproverRow(props) {
    const approver = props.approver
    const profile = approver.approver
    const lastNotifiedDate = new Date(approver.last_notified_time)
    const lastUpdatedDate = new Date(approver.last_updated_date)

    return (
        <div className="approver-row">            
            <div className="approver-row-cell"><span className="approver-index">{props.index + 1}</span></div>
            <div className="approver-row-cell"><Avatar image={profile.profile_picture}/></div>
            <div className="approver-row-cell cell-auto">
                <div>
                    <span className="font14-sb d-block">{profile.first_name} {profile.last_name}&nbsp;</span>
                    <span className="font12-m color-light-grey d-block">
                        ({profile.email})
                    </span>
                </div>
                <div className="font12-m color-light-grey">
                    {
                        approver.status === 'created' 
                            ? `Last notified ${formatDate(lastNotifiedDate, 'MMM DD, YYYY')}`
                            : `Approved ${formatDate(lastUpdatedDate, 'MMM DD, YYYY')}`
                    }
                </div>
            </div>
            <div className="approver-row-cell approver-row-actions">
                <CheckButton className="color-success"></CheckButton>
            </div>
        </div>
    )
}

function ApproverList(props) {
    const seq = ['created', 'accepted']

    const approvers = props.approvers.sort(function (a, b) {
        return seq.indexOf(b.status) - seq.indexOf(a.status)
    })

    const rows = []

    const toCategory = function (status) {
        const categoryMap = {'created': 'Pending', 'accepted': 'Approved'}
        return categoryMap[status];
    }

    let lastCategory = null
    
    approvers.forEach((approver, idx) => {
        if(approver.status !== lastCategory) {
            rows.push(
                <ApproverCategoryRow
                    key={approver.status}
                    category={toCategory(approver.status)} />
            )
        }
        rows.push(<ApproverRow 
            key={approver.approver.email} 
            index={idx}
            approver={approver}/>
        )
    })
    return (
        <div>
            {rows}
        </div>
    )
}

export default ApproverList