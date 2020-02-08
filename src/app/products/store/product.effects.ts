import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap, concatMap } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import * as fromProductActions from "./product.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      mergeMap(action =>
        this.productService.getProducts().pipe(
          map(products => fromProductActions.loadProductsSuccess({ products })),
          catchError(error =>
            of(fromProductActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProduct),
      mergeMap(action =>
        this.productService.getProduct(action.id).pipe(
          map(product =>
            fromProductActions.loadProductSuccess({ selectedProduct: product })
          ),
          catchError(error =>
            of(fromProductActions.loadProductFailure({ error }))
          )
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap(action =>
        this.productService.createProduct(action.product).pipe(
          map(product => fromProductActions.addProductSuccess({ product })),
          catchError(error =>
            of(fromProductActions.addProductFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/product/list"]))
    )
  );

  updateProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromProductActions.updateProduct),
        concatMap(action =>
          this.productService.editProduct(
            action.product.id,
            action.product.changes
          )
        ),
        tap(() => this.router.navigate(["/product/list"]))
      ),
    { dispatch: false }
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.deleteProduct),
      mergeMap(action =>
        this.productService.deleteProduct(action.id).pipe(
          map(() => fromProductActions.deleteProductSuccess({ id: action.id })),
          catchError(error =>
            of(fromProductActions.deleteProductFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/product/list"])) // Not in Video 12
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}
}
