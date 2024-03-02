import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Observable, of } from 'rxjs';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productService: ProductService;
  let cartService: CartService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: 1,
              },
            },
          },
        },
        {
          provide: ProductService,
          useValue: {
            getProduct: () => of({ id: 1, name: 'Test Product', price: 10 }),
          },
        },
        {
          provide: CartService,
          useValue: {
            getCartCount: () => 0,
            incrementCartCount: () => {},
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    cartService = TestBed.inject(CartService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch product details on initialization', () => {
    spyOn(productService, 'getProduct').and.returnValue({
      id: 1,
      name: 'Test Product',
      price: 10,
      description: '',
      imageUrl: '',
    });
    component.ngOnInit();
    expect(component.product).toEqual({
      id: 1,
      name: 'Test Product',
      price: 10,
      description: '',
      imageUrl: '',
    });
  });

  it('should add product to cart', () => {
    spyOn(cartService, 'incrementCartCount');
    component.addToCart();
    expect(cartService.incrementCartCount).toHaveBeenCalled();
  });

  it('should navigate back to home page', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
