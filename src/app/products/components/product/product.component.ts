import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../../models/product";

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
    private service: ProductService
  ) {}

  ngOnInit() {
    this.product$ = this.service.getProduct(
      this.route.snapshot.paramMap.get("id")
    );
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.router.navigate(["/product/list"]);
      },
      error: err => console.error(err)
    };
    this.service.deleteProduct(id).subscribe(productsObserver);
  }
}
