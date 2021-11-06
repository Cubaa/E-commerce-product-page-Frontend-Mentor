import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MobileMenuState {
  isOpenMobileMenu: boolean;
}

const initialState: MobileMenuState = {
  isOpenMobileMenu: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setIsOpenMobileMenu(state) {
      state.isOpenMobileMenu = !state.isOpenMobileMenu;
    },
resetMobileMenu(state, action:PayloadAction<boolean>){
    state.isOpenMobileMenu = action.payload;
}
  },
});

export const { setIsOpenMobileMenu, resetMobileMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice;
