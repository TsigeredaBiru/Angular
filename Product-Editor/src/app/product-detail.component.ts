import { Product } from './product';
import { Component, /* Input, */ Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from './product.service';
import 'rxjs/add/operator/switchMap';
@Component({


  // tslint:disable-next-line:component-selector
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']


})

export class ProductDetailComponent implements OnInit {


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
) {}


@Input()  product: Product;

@Output() deleteRequest = new EventEmitter<Product>();

 ondeleteProduct() {

  this.deleteRequest.emit(this.product);

}
ngOnInit(): void {
  this.route.paramMap.switchMap((params: ParamMap) =>
  this.productService.getProduct(+params.get('id'))).subscribe(product => this.product = product);
}

goBack(): void {

  this.location.back();


}

}
