import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to /products
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Preload all lazy-loaded modules in the background after the initial content has been loaded
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
