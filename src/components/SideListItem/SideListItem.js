import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideListItem.module.scss'

const SideListItem = ({id, src, title}) => {
    return (
        <Link  className={Style.item} to={{pathname: 'watch', search: `?V=${id}`}}>
            <img src={src} alt={title} />
            <div>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default SideListItem
