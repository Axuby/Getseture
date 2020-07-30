import React from 'react'

const previewCollection = ({title,items}) => {
  return (
    <div className="collection-item">
        <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
{
    items.filter((item,idx)=> idx < 4).map(({id,name,imageUrl,price})=> 
                <div key={id}>
                    {name}
                </div>)
}
      </div>
    </div>
  )
}

export default previewCollection
