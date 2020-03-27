import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products = {};

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {

        this.products_data();
    }

    products_data() {

      this.productsService.all_products().subscribe( data => {
            this.products = data;
        });
    }
}
