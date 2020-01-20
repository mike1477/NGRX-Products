import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, public router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const productsObserver = {
      next: products => (this.products = products),
      error: err => console.error(err)
    };

    this.productService.getProducts().subscribe(productsObserver);
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.ngOnInit();
      },
      error: err => console.error(err)
    };
    this.productService.deleteProduct(id).subscribe(productsObserver);
  }
}
