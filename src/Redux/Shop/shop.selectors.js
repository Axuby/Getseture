import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
} 

const selectShop = state => state.shop;

export const selectCollectionShop = createSelector(
    [selectShop], shop  => shop.collections
)

// export const  selectCollectionUrl = collectionUrlParam => 
// createSelector(
//     [selectCollectionShop],
//     collections => collections.find(
//         collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//  )

//  export const selectCollectionPreview = collectionPreview => createSelector(
//      [selectCollectionShop],
//  )


 export const  selectCollectionUrl = collectionUrlParam => createSelector(
    [selectCollectionShop],
    collections => 
         collections[collectionUrlParam]
    )
    export const selectCollectionPreview = createSelector(
        [selectCollectionShop],
        collections => Object.keys(collections).map(key => collections[key])
    )