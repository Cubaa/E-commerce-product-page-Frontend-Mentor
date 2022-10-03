import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMobileMenuState {
  isOpenMobileMenu: boolean;
}

const initialState: IMobileMenuState = {
  isOpenMobileMenu: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setIsOpenMobileMenu(state: IMobileMenuState) {
      state.isOpenMobileMenu = !state.isOpenMobileMenu;
    },
    resetMobileMenu(state: IMobileMenuState, action:PayloadAction<boolean>){
      state.isOpenMobileMenu = action.payload;
    }
  },
});

export const { setIsOpenMobileMenu, resetMobileMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice;
