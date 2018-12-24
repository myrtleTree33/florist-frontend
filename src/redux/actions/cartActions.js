import {
  CART_ADD,
  CART_REMOVE,
  CART_SET_ITEM_QUANTITY,
  CART_SET_FIELD
} from '../constants/cartConstants';

export function cartAdd({ id, quantity }) {
  // TODO replace placeholders
  const name = 'flower config A';
  const imgSrc = 'https://m.media-amazon.com/images/I/51z7gY5iSOL._AA256_.jpg';
  return {
    type: CART_ADD,
    payload: { id, name, quantity, imgSrc }
  };
}

export function cartRemove({ id }) {
  // TODO put in REST
  return {
    type: CART_REMOVE,
    payload: { id }
  };
}

export function cartSetField({ field, value }) {
  // TODO put in REST
  return {
    type: CART_SET_FIELD,
    payload: { field, value }
  };
}

export function cartSetItemQty({ id, quantity }) {
  // TODO put in REST
  return {
    type: CART_SET_ITEM_QUANTITY,
    payload: { id, quantity }
  };
}
