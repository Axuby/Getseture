import React from 'react';
import {  withRouter} from "react-router-dom";

const MenuItem = ({title,imgUrl,size,history,linkUrl,match}) => {
  console.log(size)
  console.log(match.url)
  console.log(linkUrl)
  console.log(imgUrl)
  return (
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{
      backgroundImage:`url(${imgUrl})`
    }}/>
           <div className="content">
            <h1 className="title"> {title}</h1>
            <span className="subtitle">{title}</span>
       </div>
    </div>
  )
}

export default withRouter(MenuItem);
