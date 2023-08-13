// cart.selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartTotal = createSelector(
  selectCartState,
  (cartState) => cartState.total
);
// Add other cart-related selectors here
