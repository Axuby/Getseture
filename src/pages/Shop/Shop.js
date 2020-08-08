import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from '../Category/Collection';

const  Shop = ({match}) => {

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:categoryId`} component={Collection}/>
            </div>
        );
    
}

export default Shop;