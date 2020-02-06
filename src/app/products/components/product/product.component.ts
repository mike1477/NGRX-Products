import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../../models/product";
import { Store, select } from "@ngrx/store";
import { ProductState } from "../../store/product.reducer";
import * as fromActions from "../../store/product.actions";
import { selectedProduct } from "../../store/product.selectors";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.store.dispatch(
      fromActions.loadProduct({ id: this.route.snapshot.paramMap.get("id") })
    );

    this.product$ = this.store.pipe(select(selectedProduct));
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }
}
