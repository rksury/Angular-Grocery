import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Router, ActivatedRoute} from '@angular/router';
import {CartService} from '../cart/cart.service';
import {FormControl, FormGroup} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import {GodService} from '../god.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    showProducts = true;
    special;
    cart;
    products = {};

    submitform = new FormGroup({
        pk: new FormControl(''),
        item_name: new FormControl(''),
        amount: new FormControl(''),
        discount_amount: new FormControl(''),
        Quantity: new FormControl(''),
    });

    constructor(private productsService: ProductsService, private cartService: CartService,
                private activatedRoute: ActivatedRoute, private toast: ToastrService,
                private router: Router, private godService: GodService) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.get_product(params);
        });
    }

    get_product(params?: any) {
        this.productsService.get_products(params).subscribe(data => {
            this.products = data;
            this.showProducts = true;
        }, error => {
            this.showProducts = false;
        });
    }

    get_all_products() {
        this.productsService.get_all_products().subscribe(data => {
            this.products = data;
            this.showProducts = true;
        }, error => {
            this.showProducts = false;
        });
    }

    onSubmit(pk) {
        // console.warn(this.submitform.value);
        this.cartService.add_to_cart(pk).subscribe(data => {
            this.products = data;
        }, error => {
            this.showProducts = false;
        });
    }
}
