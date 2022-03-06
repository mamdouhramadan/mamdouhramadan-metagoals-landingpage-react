import React from 'react'

export const TeamMember = ({ name, title, img, type }) => {
    return (
        <>
            <div className={`team-card ${type === "leadership" ? 'leader-ship' : 'team-member'}`}>
                <div className="user-img">
                    <img src={img} alt="" />
                </div>
                <div className="user-detailes">
                    <div className="username">{name}</div>
                    <div className="job-title">{title}</div>
                </div>
            </div>
        </>
    )
}
