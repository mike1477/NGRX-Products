import { createAction, props } from "@ngrx/store";
import { Update } from "@ngrx/entity";

import { Product } from "../models/product";

export const loadProducts = createAction(
  "[Product/API] Load Products",
  props<{ products: Product[] }>()
);
// Add Product
export const addProduct = createAction(
  "[Product Add Component] Add Product",
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  "[Product Add Effect] Add Product Success",
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  "[Product Add Effect] Add Product Failure",
  props<{ error: any }>()
);

export const upsertProduct = createAction(
  "[Product/API] Upsert Product",
  props<{ product: Product }>()
);

export const upsertProducts = createAction(
  "[Product/API] Upsert Products",
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  "[Product/API] Update Product",
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  "[Product/API] Update Products",
  props<{ products: Update<Product>[] }>()
);

export const deleteProduct = createAction(
  "[Product/API] Delete Product",
  props<{ id: string }>()
);

export const deleteProducts = createAction(
  "[Product/API] Delete Products",
  props<{ ids: string[] }>()
);

export const clearProducts = createAction("[Product/API] Clear Products");
