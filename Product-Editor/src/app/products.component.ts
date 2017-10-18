
import { Router } from '@angular/router';
import { style } from '@angular/animations';
import { PRIVACY_PROTECTED } from 'tslint/lib/rules/completedDocsRule';
import { NamedLazyChunksWebpackPlugin } from '@angular/cli/plugins/webpack';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product, condition } from './product';

import { ProductService } from './product.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']




/* providers: [ProductService] */

/* template: `<product-detail (deleteRequest)="deleteProduct($event)" [product]="selectedProduct"></product-detail>` */
})
export class ProductsComponent implements OnInit {
    products: Product[];
  /* products = PRODUCTS; */
  selectedProduct: Product;
  constructor(private productService: ProductService, private router: Router) {
    /* this.products = this.productService.getProducts(); */
  }
   getProducts(): void {
   this.productService.getProducts().then(products => this.products = products);

  }

onSelect(product: Product): void {
  this.selectedProduct = product;

}

deleteProduct(product: Product) {

 let productIndex: number;
 productIndex = this.products.indexOf(product);


/* delete this.products[productIndex]; */
this.products.splice(productIndex, 1);


}

    public ngOnInit(): void {
        this.getProducts();
    }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);

  }

  }










