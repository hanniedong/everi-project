import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountKey = 'cartCount';
  private cartCountSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  cartCount$: Observable<number> = this.cartCountSubject.asObservable();

  constructor() {}

  // Get cart count from local storage
  getCartCount(): number {
    const cartCountStr = localStorage.getItem(this.cartCountKey);
    return cartCountStr ? parseInt(cartCountStr, 10) : 0;
  }

  // Set cart count in local storage
  setCartCount(count: number): void {
    localStorage.setItem(this.cartCountKey, count.toString());
  }

  // Increment cart count
  incrementCartCount(): void {
    const count = this.getCartCount() + 1;
    this.setCartCount(count);
  }
}
