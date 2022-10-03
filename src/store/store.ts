import { configureStore } from "@reduxjs/toolkit";
import mobileMenuSlice from "../features/MobileMenu/mobileMenuSlice";
import shoppingCartSlice from "../features/shoppingCart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice.reducer,
    mobileMenuSlice: mobileMenuSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
