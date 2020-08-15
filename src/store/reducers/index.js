import {combineReducers} from 'redux';
import AuthReducer from './authReducers';
import HomeReducer from './homeReducers';
import ProductsReducer from './productsReducer';

export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
  products: ProductsReducer,
});
