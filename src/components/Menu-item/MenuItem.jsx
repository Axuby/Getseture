import React from 'react'

const MenuItem = ({title,imgUrl,size}) => {
  return (
    <div className={`${size} menu-item`} style={{
      backgroundImage:"red"
    }}>
    <div className="content">
  <h1 className="title"> {title}</h1>
           <span className="subtitle">A nice hat</span>
       </div>
    </div>
  )
}

export default MenuItem;
