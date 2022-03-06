import React from 'react'

export const Button = ({ className, rounded, icon, color, children }) => {
    return (
        <button
            className={`btn theme-btn ${rounded ? 'btn-rounded' : ''} ${color === 'light' ? 'btn-light' : 'btn-primary'} ${className || ''}`}
        >
            <span className='mx-2'>{children}</span>
            {icon && <ion-icon name={icon}></ion-icon>}
        </button>
    )
}