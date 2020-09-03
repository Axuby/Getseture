import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from '../Category/Collection';
import { firestore } from 'firebase';
import { convertCollectionSnapshotToMap } from '../../firebase/Firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../Redux/Shop/shop.actions';

class  Shop extends React.Component {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const { updateCollections,match } = this.props
        const collectionRef = firestore.collection('collectionDB')
       this.unsubscribeFromSnapshot =  collectionRef.onSnapshot(async  snapShot => {
            console.log(snapShot)
          const collectionsMap =  convertCollectionSnapshotToMap(snapShot)
    updateCollections(collectionsMap)

        })
    }
      render(){
        
        return (
            <div className="shop-page">
                <Route exact path={`${this.props.match.path}`} updateCollections={updateCollections} component={CollectionOverview} />
                <Route path={`${this.props.match.path}/:collectionId`} updateCollections={updateCollections} component={Collection}/>
            </div>
        );
      }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections:collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shop);