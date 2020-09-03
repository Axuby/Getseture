import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from '../Category/Collection';
import { firestore } from 'firebase';
import { convertCollectionSnapshotToMap } from '../../firebase/Firebase.utils';

class  Shop extends React.Component {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const collectionRef = firestore.collection('collectionDb')
        collectionRef.onSnapshot(async  snapShot => {
            console.log(snapShot)
           await convertCollectionSnapshotToMap(snapShot)
        })
    }
      render(){
        return (
            <div className="shop-page">
                <Route exact path={`${this.props.match.path}`} component={CollectionOverview} />
                <Route path={`${this.props.match.path}/:collectionId`} component={Collection}/>
            </div>
        );
      }
    
}

export default Shop;