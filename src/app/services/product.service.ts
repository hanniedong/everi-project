import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Coffee',
      description: 'A delicious cup of coffee to start your day',
      price: 3.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/10/54/coffee-791045_1280.jpg',
    },
    {
      id: 2,
      name: 'Espresso',
      description: 'Strong and concentrated shot of espresso',
      price: 2.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149_1280.jpg',
    },
    {
      id: 3,
      name: 'Latte',
      description:
        'Smooth and creamy latte made with espresso and steamed milk',
      price: 4.49,
      imageUrl:
        'https://media.istockphoto.com/id/173245886/photo/cappuccino.jpg?s=2048x2048&w=is&k=20&c=X2UjDSUDu_I7ayvpFaOF8yUlU3-tjvRGrZhKBxcCQb4=',
    },
    {
      id: 4,
      name: 'Tea',
      description: 'Refreshing cup of tea, perfect for any time of day',
      price: 2.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg',
    },
    {
      id: 5,
      name: 'Iced Coffee',
      description:
        'Chilled coffee served over ice, a cool and refreshing treat',
      price: 3.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/11/01/10/41/iced-coffee-5703345_960_720.jpg',
    },
    {
      id: 6,
      name: 'Smoothie',
      description:
        'Healthy and fruity smoothie, packed with vitamins and flavor',
      price: 4.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/02/23/19/23/smoothies-3176371_1280.jpg',
    },
    {
      id: 7,
      name: 'Croissant',
      description: 'Flaky and buttery croissant, perfect for breakfast',
      price: 2.49,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_1280.jpg',
    },
    {
      id: 8,
      name: 'Muffin',
      description: 'Freshly baked blueberry muffin, bursting with flavor',
      price: 1.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/05/13/16/37/muffin-1390368_960_720.jpg',
    },
    {
      id: 9,
      name: 'Bagel',
      description: 'Toasted bagel with cream cheese, a classic favorite',
      price: 2.99,
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/01/09/05/55/bagel-7706691_1280.jpg',
    },
    {
      id: 10,
      name: 'Cookie',
      description: 'Freshly baked chocolate chip cookie, warm and gooey',
      price: 1.49,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_1280.jpg',
    },
  ];

  constructor() {}

  getProduct(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      throw Error('Product not found');
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
}
