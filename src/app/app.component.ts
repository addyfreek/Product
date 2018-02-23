import { Component } from '@angular/core';
import { Product } from './product';
import { Products } from './mock-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsList: Product[] = Products;
  selectedProduct: Product;

  getProductDetails(productId: number) {
    this.selectedProduct = this.productsList.find(product => product.productId === productId);
  }

  deleteProduct (productId: number) {
	this.selectedProduct = null;
	this.productsList = this.productsList.filter(product=>product.productId !== productId);
}
}
