import React,{useContext} from 'react'
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import CollectionsContext from "../../context/collection/Collections.context";
import './CollectionsOverview.scss';
import { connect } from 'react-redux';
import { selectCollectionsForPreview, selectCollectionShop } from '../../Redux/Shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionOverview =({collection}) => {
     const collections = useContext(CollectionsContext)
  
  return (
    <div className='collections-overview'>
        {
                    collections.map(({id,...otherCollectionProps}) =>(
                        <CollectionPreview key={id}  {...otherCollectionProps}/>
                    ))
                }
    </div>
  )
}


//  const mapStateToProps = createStructuredSelector({
//      collections: selectCollectionsForPreview
// })
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionShop
})
export default connect(mapStateToProps)(CollectionOverview)