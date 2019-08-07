import {createStore,combineReducers,applyMiddleware} from 'redux';
import Reducer from './reducer/nav'
import Post from './reducer/postred'
import Comm from './reducer/comm'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';




const Store = createStore(combineReducers({
    nav:Reducer,
    post:Post,
    comm:Comm
    }),applyMiddleware(thunk));


persistStore(Store);
export default Store;
