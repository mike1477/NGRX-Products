import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import * as fromProductActions from "./product.actions";
import { of } from "rxjs";

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => fromProductActions.loadProductsSuccess({ products })),
          catchError(error =>
            of(fromProductActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
