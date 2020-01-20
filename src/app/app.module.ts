import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./products/components/product/product.component";
import { ProductAddComponent } from "./products/components/product-add/product-add.component";
import { ProductEditComponent } from "./products/components/product-edit/product-edit.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { HomeComponent } from "./pages/home/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from "./products/products.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
