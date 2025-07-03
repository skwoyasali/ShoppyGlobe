// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(p => p.id === id);
      if (item) item.quantity = quantity;
    },
    emptyCart:(state)=>{
      state.items.length=0;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
