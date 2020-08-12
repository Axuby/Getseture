import React,{useContext} from 'react';
import './Collection.scss'
import CollectionItem from '../../components/collectionItem/CollectionItem';
import CollectionsContext from '../../context/collection/Collections.context';

const Collection = ({match}) => {
  
  const collections = useContext(CollectionsContext)
  console.log(collections[match.params.collectionId])
  const collection = collections[match.params.collectionId]
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

// const mapStateToProps = (state,ownProps) => ({
//   collection:selectCollectionUrl(ownProps.match.params.collection)(staate)
// })

export default (Collection)
