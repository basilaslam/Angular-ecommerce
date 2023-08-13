// cart.actions.ts

import { createAction, props } from '@ngrx/store';

export const updateCartTotal = createAction('[Cart] Update Cart Total', props<{ total: number }>());
// Add other cart-related actions here
