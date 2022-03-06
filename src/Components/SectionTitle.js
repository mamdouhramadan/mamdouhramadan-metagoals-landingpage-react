import React from 'react'

export const SectionTitle = ({ children, center, className }) => {
    return (
        <>
            <h2 className={`section-title ${center ? 'text-center' : ''} ${className || ''}`}>{children}</h2>
        </>
    )
}
