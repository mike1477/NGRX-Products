import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}
  model: any = {};

  ngOnInit() {
    this.service
      .getProduct(this.route.snapshot.paramMap.get("id"))
      .subscribe(product => (this.model = product));
  }

  onSubmit() {
    const productObserver = {
      next: product => {
        this.router.navigate(["/product/list"]), console.log("success");
      },
      error: err => console.error(err)
    };
    console.log(this.model);
    this.service.editProduct(this.model).subscribe(productObserver);
  }
}
