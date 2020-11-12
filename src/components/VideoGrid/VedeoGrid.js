import React from 'react'
import Style from './VideoGrid.module.scss'

const VedeoGrid = ({children}) => {
    return (
        <div className={Style.container}>
            {children}
        </div>
    )
}

export default VedeoGrid
