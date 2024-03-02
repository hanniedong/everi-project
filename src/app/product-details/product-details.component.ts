import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: any;
  cartCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.params['id']);
    this.product = this.productService.getProduct(this.productId);
    this.cartCount = this.cartService.getCartCount();
  }

  addToCart(): void {
    this.cartService.incrementCartCount();
    this.updateCartCount();
    alert('Product added to cart!');
  }

  updateCartCount(): void {
    this.cartCount = this.cartService.getCartCount();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
