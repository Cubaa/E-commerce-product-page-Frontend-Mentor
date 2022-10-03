import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../data/products";
import { IProduct } from "../../interfaces/product.interface";

export interface IProductCart extends IProduct {
  total: number;
  quantity: number;
}
interface ICartPayload {
  id: number;
  quantity: number;
}
interface IShoppingCartState {
  shoppingCart: IProductCart[];
  isOpenShoppingcart: boolean;
  itemCounter: number;
}

const initialState: IShoppingCartState = {
  shoppingCart: [],
  isOpenShoppingcart: false,
  itemCounter: 0
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setIsOpenShoppingCart(state: IShoppingCartState) {
      state.isOpenShoppingcart = !state.isOpenShoppingcart;
    },
    addProductToCart(state: IShoppingCartState, action: PayloadAction<ICartPayload>) {
      const existProduct = state.shoppingCart.find((product: IProductCart) => product.id === action.payload.id);
      
      if (existProduct) {
        const index = state.shoppingCart.findIndex((product: IProductCart) => product.id === existProduct.id)
        const updateTotal = state.shoppingCart[index].total + (existProduct.price * action.payload.quantity)
        const updateQuantity = state.shoppingCart[index].quantity + action.payload.quantity;

          const updateProduct: IProductCart =  {
            ...existProduct,
            total: updateTotal,
            quantity: updateQuantity
          }
        
        state.shoppingCart[index] = updateProduct;
      }
      else {
        products.forEach((product: IProduct) => {
          if (product.id === action.payload.id) {
            const mappedProduct: IProductCart =  {
              ...product,
              total: product.price * action.payload.quantity,
              quantity: action.payload.quantity
            }
            state.shoppingCart.push(mappedProduct);
          }
        });
      }
    },
    removeProductFromCart(state: IShoppingCartState, action: PayloadAction<number>) {
      const filteredShoppingCart = state.shoppingCart.filter((product: IProductCart) => product.id !== action.payload)

      state.shoppingCart = filteredShoppingCart;
    }
  }
});

export const { setIsOpenShoppingCart, addProductToCart, removeProductFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice;
