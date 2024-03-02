import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product.interface';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProducts: () => [
              { id: 1, name: 'Test Product 1', price: 10 },
              { id: 2, name: 'Test Product 2', price: 20 },
            ],
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on initialization', () => {
    spyOn(productService, 'getProducts').and.returnValue([
      {
        id: 1,
        name: 'Test Product 1',
        price: 10,
        description: '',
        imageUrl: '',
      },
      {
        id: 2,
        name: 'Test Product 2',
        price: 20,
        imageUrl: '',
        description: '',
      },
    ]);
    component.ngOnInit();
    expect(component.products.length).toBe(2);
  });

  it('should navigate to product details', () => {
    spyOn(router, 'navigate');
    const productId = 1;
    component.viewProductDetails(productId);
    expect(router.navigate).toHaveBeenCalledWith(['/product', productId]);
  });
});
