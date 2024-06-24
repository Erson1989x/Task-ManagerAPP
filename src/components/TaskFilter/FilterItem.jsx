import React from 'react'
import './FilterItem.css'
import clsx from 'clsx'
import Badge from '../Badge/Badge'

const FilterItem = () => {
  return (
    <div onAClick={props.statucClick} className={clsx('filter-item-container',props.active && 'active')} >
        <p className={clsx('filter-item',props.active && 'active')}>
            {props.label}
        </p>
        <Badge label ={props.count}
        color = {clsx({blue: props.active, black: !props.active})} />
    </div>
  )
}

export default FilterItem