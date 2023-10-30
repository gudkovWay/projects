import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';

const { items, totalPrice } = getCartFromLS();

const initialState = {
  isOpen: false,
  isPay: false,
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Math.round(obj.price * obj.count + sum);
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice = Math.round(state.totalPrice - findItem.price);
      }
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = Math.round(state.totalPrice - findItem.price * findItem.count);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    payButton(state) {
      state.isPay = true;
    },
    closeCartPay(state) {
      state.isPay = false;
    },
    clearPay(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  openCart,
  closeCart,
  addItem,
  minusItem,
  removeItem,
  clearItems,
  payButton,
  closeCartPay,
  clearPay,
} = cartSlice.actions;
export default cartSlice.reducer;
