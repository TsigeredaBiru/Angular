import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [
    AppComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
