import { createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const middlewares = [logger,thunk]

if (process.env.NODE_ENV === " development") {
    middlewares.push(logger)
}

 export const store = createStore(rootReducer,compose(applyMiddleware(...middlewares),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ))
 export const persistor = persistStore(store)

