import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const initialState = {
  cartItems: [],
  // products : [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      let removedProduct = state.cartItems.find(
        (c) => c.product.id === payload.id
      );
      if (removedProduct.quantity > 1) {
        removedProduct.quantity--;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
        };
      }

    // return {
    //   ...state,
    //   cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
    // };
    default:
      return state;
  }
}

export const cartSelector = (state) => state.cart.cartItems;
