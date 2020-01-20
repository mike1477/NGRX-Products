import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { ProductAddComponent } from "./components/product-add/product-add.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [
  { path: "get/:id", component: ProductComponent },
  { path: "add", component: ProductAddComponent },
  { path: "edit/:id", component: ProductEditComponent },
  { path: "list", component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
