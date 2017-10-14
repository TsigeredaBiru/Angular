import { Product } from './product';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({


  // tslint:disable-next-line:component-selector
  selector: 'product-detail',

  template: `<div *ngIf="product">
  <h2>{{product.name}} details!</h2>
  <div><label>id:</label>{{product.id}}</div>
  <div>
  <label>name:</label>
  <input [(ngModel)]="product.name" placeholder="name">
  </div>
  <div><label>description:</label>{{product.description}}</div>
  <div><label>price:</label>{{product.price}}</div>
  <div><label>condition:</label>{{product.condition}}</div>

  <button (click)="ondeleteProduct">Delete</button>
   </div>`
})

export class ProductDetailComponent {

@Input() product: Product;

@Output() deleteRequest = new EventEmitter<Product>();

/* ondeleteProduct() {

  this.deleteRequest.emit(this.product);

} */


}
