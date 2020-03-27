import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products = {};

    constructor(private productsService: ProductsService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
        this.products_data(params);
      });
    }

    products_data(params?: any) {

      this.productsService.all_products(params).subscribe( data => {
            this.products = data;
        });
    }
}
