import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";

export const loadProducts = createAction(
  "[Product List Component] Load Products"
);

export const loadProductsSuccess = createAction(
  "[Product List Component] Load Products Success",
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  "[Product List Component] Load Products Failure",
  props<{ error: any }>()
);
