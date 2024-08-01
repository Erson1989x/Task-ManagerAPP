import React from 'react'
import clsx from 'clsx'
import Badge from '../Badge/Badge'

const FilterItem = (props) => {
  return (
    <div onClick={props.statusClick} className={clsx('filter-item-container', props.active && 'active')}>
        <p className={clsx('filter-item', props.active && 'active')}>
            {props.label}
        </p>
        <Badge label={props.count}
        color={clsx({ blue: props.active, black: !props.active })} />
    </div>
  )
}

export default FilterItem