import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cartCount: number = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.products = products;
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
