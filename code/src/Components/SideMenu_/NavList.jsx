import React from 'react'

const NavList = ({ item, navOnClick }) => {

  return (
    <li>
      <a
        href='#'
        className={`${item.active ? 'active' : undefined}`}
        onClick={() => navOnClick (item._id, item.target)}
      >
        <i className={`bi ${item.icon}`} />
        <span className='name'>
          {item.name}
        </span>
      </a>
    </li>
  )
}

export default NavList
