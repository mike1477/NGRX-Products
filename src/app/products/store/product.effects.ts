import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import * as fromProductActions from "./product.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class ProductEffects {
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

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}
}
