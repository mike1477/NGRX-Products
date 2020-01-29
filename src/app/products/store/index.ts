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
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export const productStateFeatureKey = "productState";

export interface ProductState extends EntityState<Product> {
  error: any;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  error: undefined
});

export const reducers = createReducer(
  initialState,
  on(loadProductsSuccess, (state, action) => {
    return adapter.addAll(action.products, state);
  }),
  on(loadProductsFailure, (state, action) => {
    return {
      error: action.error
    };
  })
);

export const selectProductsFeature = createFeatureSelector<ProductState>(
  productStateFeatureKey
);

export const selectProducts = createSelector(
  selectProductsFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.error
);
export const metaReducers: MetaReducer<ProductState>[] = !environment.production
  ? []
  : [];
