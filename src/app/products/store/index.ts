import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { Product } from "../models/product";
import { loadProductsSuccess, loadProductsFailure } from "./product.actions";

export const productStateFeatureKey = "productState";

export interface ProductState {
  products: Product[];
  error: any;
}

export const initialState: ProductState = {
  products: undefined,
  error: undefined
};

export const reducers = createReducer(
  initialState,
  on(loadProductsSuccess, (state, action) => {
    return {
      products: action.products
    };
  }),
  on(loadProductsFailure, (state, action) => {
    return {
      products: state.products,
      error: action.error
    };
  })
);

export const metaReducers: MetaReducer<ProductState>[] = !environment.production
  ? []
  : [];
