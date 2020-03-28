import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CartService} from '../cart/cart.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products = {};

    submitform = new FormGroup({
        // image: new FormControl(''),
        // product_name: new FormControl(''),
        // price: new FormControl(''),

        add: new FormControl(''),
        item_name: new FormControl(''),
        amount: new FormControl(''),
        discount_amount: new FormControl(''),

    });

    constructor(private productsService: ProductsService, private cartService: CartService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.products_data(params);
        });
    }

    products_data(params?: any) {

        this.productsService.all_products(params).subscribe(data => {
            this.products = data;
        });
    }

    onSubmit() {
        console.warn(this.submitform.value);
        // this.cartService.add_to_cart(pk).subscribe(data =>{
        //
        // });
    }
}
