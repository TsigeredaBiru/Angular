import { selector } from 'rxjs/operator/multicast';

import { Component } from '@angular/core';

@Component({



  // tslint:disable-next-line:component-selector
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1>

            <nav>
            <a routerLink="/dashboard"
            routerLinkActive="active">Dashboard</a>
            <a routerLink="/products">Products</a>
            </nav>

            <router-outlet></router-outlet>


            `




})
export class AppComponent {
title = 'Tour of Products';
}
