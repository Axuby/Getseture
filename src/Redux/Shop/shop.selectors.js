import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hat:1,
    sneakers:2,
    jacket:3,
    womens:4,
    mens:5
} 

const selectShop = state => state.shop;

export const selectCollectionShop = createSelector(
    [selectShop],shop  => shop.collections
)

export const  selectCollectionUrl = collectionUrlParam => createSelector(
    [selectCollectionShop],
    collections => collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
    )
