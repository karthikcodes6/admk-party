import {
  FETCH_PRODUCTS,
  SELECT_PRODUCT,
  INCREASE_QTY,
  DECREASE_QTY,
} from '../actionTypes';

export default function (state = {products: []}, action) {
  const products = state.products;
  const product = products.find(
    (obj) => obj.productId === action.payload.productId,
  );
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SELECT_PRODUCT:
      if (product.selected) {
        product.selected = false;
        product.qty = 0;
      } else {
        product.selected = true;
        product.qty = 1;
      }
      return {
        ...state,
        products,
      };
    case INCREASE_QTY:
      if (product.qty) {
        product.qty += 1;
      } else {
        product.qty = 1;
      }
      return {
        ...state,
        products,
      };
    case DECREASE_QTY:
      if (product.qty > 0) {
        product.qty -= 1;
      } else {
        product.qty = 0;
      }
      return {
        ...state,
        products,
      };
    case 'REMOVE_PRODUCT':
      product.qty = 0;
      return {
        ...state,
        products,
      };
    default:
      return state;
  }
}
