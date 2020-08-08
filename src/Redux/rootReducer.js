import { combineReducers} from 'redux'
import userReducer from "./User/user.reducer";
import cartReducer from "./Cart/cart.reducer";
import {  persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from './Directory/Directory.reducer';
import { shopReducer } from './Shop/shop.reducer';


const  persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)