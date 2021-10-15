import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCartState {
  isOpenShoppingcart: boolean;
}

const initialState: ShoppingCartState = {
  isOpenShoppingcart: false,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setIsOpenShoppingCart(state) {
      state.isOpenShoppingcart = !state.isOpenShoppingcart;
    },
  },
});

export const { setIsOpenShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice;
