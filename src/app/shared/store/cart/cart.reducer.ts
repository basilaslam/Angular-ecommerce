// cart.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { updateCartTotal } from './cart.actions';

export interface CartState {
  total: number;
}

const initialState: CartState = {
  total: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(updateCartTotal, (state, { total }) => ({ ...state, total }))
);
