import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../services/product.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailsComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
