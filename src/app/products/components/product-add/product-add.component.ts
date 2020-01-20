import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"]
})
export class ProductAddComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    const productObserver = {
      next: product => (
        this.router.navigate(["/product/list"]), console.log("success")
      ),
      error: err => console.error(err)
    };

    this.productService.createProduct(f.value).subscribe(productObserver);
  }
}
