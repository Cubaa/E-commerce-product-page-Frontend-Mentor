import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./features/shoppingCart/shoppingCartSlice";
// ...

export const store = configureStore({
  reducer: {
    isOpenShoppingcart: shoppingCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
