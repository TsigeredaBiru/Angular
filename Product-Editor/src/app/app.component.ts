import { style } from '@angular/animations';
import { PRIVACY_PROTECTED } from 'tslint/lib/rules/completedDocsRule';
import { NamedLazyChunksWebpackPlugin } from '@angular/cli/plugins/webpack';
import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product, condition } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1>

              <ul class="products">
              <li *ngFor="let product of products"
              [class.selected]="product===selectedProduct"
              (click)="onSelect(product)">
                <span class="badge">{{product.id}}</span>{{product.name}}
                {{product.description}} {{product.price}} {{product.condition}}
              </li>
              </ul>
              <product-detail [product]="selectedProduct"></product-detail>

              `
              /* <product-detail [product]="selectedProduct"=(deleteRequest)="delete($event)"></product-detail> */

              ,

styles: [`

.selected {
background-color: #CFD8DC !important;
color: white;
}

.products{
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 25em;
}
.products li {
  cursor: pointer;
  position: relative;
  left:0;
  background-color: #EEE;
  margin: .5em;
  padding: .3dm 0;
  height: 1.6em;
  border-radius:4px;
}
.products li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: 1em;
}
.products .text{
  position: relative;
  top: -3px;

}
.products .badge{
  display: inline-block;
  font-size: small;
  color:white;
  padding:0.8em o.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position:relative;
  left:-1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

`]

})
export class AppComponent {
  title = 'Tour of Products';
  products = PRODUCTS;
  selectedProduct: Product;


onSelect(product: Product): void {
  this.selectedProduct = product;

}

/* delete(product: Product) {
this.products.pop();


} */
  }







const PRODUCTS: Product[] = [
  {
        id: 1,
        name : 'Laptop',
        description: 'Asus-1200',
        price: 1200,
        condition : condition.Discontinued
       },

       {
        id: 2,
        name : 'Cellphone',
        description: 'Apple-Iphone-7',
        price: 800,
        condition : condition.New
       },
       {
        id: 3,
        name : 'Cellphone',
        description: 'Samsung-5S',
        price: 300,
        condition : condition.Used
       },
       {
        id: 4,
        name : 'Flat Screen',
        description: 'Apple',
        price: 100,
        condition : condition.Discontinued
       },
       {
        id: 5,
        name : 'Video-Recorder',
        description: 'Sony',
        price: 200,
        condition : condition.Discontinued
       },
       {
        id: 6,
        name : 'Flat-TV',
        description: 'Grunding-lastest version-48 inch',
        price: 600,
        condition : condition.New
       },
       {
        id: 7,
        name : 'Kindle-fire',
        description: 'Amazon -1st version',
        price: 100,
        condition : condition.Discontinued
       },
       {
        id: 8,
        name : 'Ipad',
        description: 'Apple - latest version',
        price: 500,
        condition : condition.New
       },
       {
        id: 9,
        name : 'Samsung Galaxy',
        description: 'Tablet',
        price: 400,
        condition : condition.New
       },
       {
        id: 10,
        name : 'Google tablet',
        description: 'Google, latest model',
        price: 400,
        condition : condition.New
       }


      ];


