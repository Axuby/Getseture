import React,{useContext} from 'react'
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import CollectionsContext from "../../context/collection/Collections.context";
import './CollectionsOverview.scss';

const CollectionOverview =() => {
    const collections = useContext(CollectionsContext)
  console.log(collections)
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


// const mapStateToProps = createStructuredSelector({
//     collections: selectCollectionShop
// })
export default (CollectionOverview)