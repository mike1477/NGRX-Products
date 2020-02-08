import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { ActivatedRoute, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { ProductState } from "../../store/product.reducer";
import { loadProduct, updateProduct } from "../../store/product.actions";
import { selectedProduct } from "../../store/product.selectors";
import { Update } from "@ngrx/entity";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private store: Store<ProductState>
  ) {}
  model: any = {};

  ngOnInit() {
    this.store.dispatch(
      loadProduct({ id: this.route.snapshot.paramMap.get("id") })
    );

    this.store
      .pipe(select(selectedProduct))
      .subscribe(
        product => (this.model = Object.assign(new Product(), product))
      );
  }

  onSubmit() {
    const update: Update<Product> = {
      id: this.model.id,
      changes: this.model
    };

    this.store.dispatch(updateProduct({ product: update }));
  }
}
