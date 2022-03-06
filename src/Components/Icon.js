import React from 'react'

export const Icon = ({ name, size,className, ...rest }) => (
    <div className='app-icon'>
        <ion-icon className={className} name={name} size={size} {...rest}></ion-icon>
    </div>
)


