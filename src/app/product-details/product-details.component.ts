import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	@Input() product: Product;

	@Output() onDelete = new EventEmitter<number>();

	deleteProduct() {
		this.onDelete.emit(this.product.productId);
	}

  constructor() { }

  ngOnInit() {
  }

}
