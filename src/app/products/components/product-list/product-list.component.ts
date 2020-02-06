import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { ProductState } from "../../store/product.reducer";
import * as fromActions from "../../store/product.actions";
import { selectProducts } from "../../store/product.selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    public router: Router,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromActions.loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }
}
