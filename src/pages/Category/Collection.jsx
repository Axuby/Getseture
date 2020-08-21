import React,{useContext} from 'react';
import './Collection.scss'
import CollectionItem from '../../components/collectionItem/CollectionItem';
import CollectionsContext from '../../context/collection/Collections.context';
import { connect } from 'react-redux';
import { selectCollectionUrl } from '../../Redux/Shop/shop.selectors';

const Collection = (props) => {
  console.log(props);
  const {collection} = props
  // const collections = useContext(CollectionsContext)
  // console.log(collections[match.params.collectionId])
  // const collection = collections[match. params.collectionId]
  console.log(collection);
  const {title,items} = collection

  return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className="items">
          {
            items.map(item => (
              <CollectionItem key={item.id} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
  console.log(ownProps);
  console.log(state);
  console.log(selectCollectionUrl(ownProps.match.params.collectionId)(state));
  return ({
    collection:selectCollectionUrl(ownProps.match.params.collectionId)(state)
  })
}

export default  connect(mapStateToProps)(Collection)
