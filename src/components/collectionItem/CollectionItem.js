import React from 'react';
import "./collectionItem.scss";
import CustomButton from '../custom-button/CustomButton';
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/cart.actions";

const collectionItem = ({item,addItem}) => {
  const { name,price,imageUrl} = item
  return (
    <div className="collection-item">
      <div className="image" 
      style={{
          backgroundImage:`url(${imageUrl})`
      }}
      >
        <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <CustomButton inverted onClick={()=> addItem(item)} >Add to Cart</CustomButton>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch  => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(collectionItem)
