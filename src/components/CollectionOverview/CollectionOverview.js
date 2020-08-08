import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionShop } from '../../Redux/Shop/shop.selectors'
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import './CollectionsOverview.scss';

const CollectionOverview = ({collections}) => {
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


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionShop
})
export default connect(mapStateToProps)(CollectionOverview
    )