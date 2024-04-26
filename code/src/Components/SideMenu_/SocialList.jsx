import React from 'react'

const SocialList = ({ item }) => {

  return (
    <li>
      <a title={item.title} href={item.target} className={item.class}>
        <i className={`bi ${item.icon}`}/>
      </a>
    </li>
  )
}

export default SocialList
