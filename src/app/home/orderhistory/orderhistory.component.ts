import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products/products.service';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'app-orderhistory',
    templateUrl: './orderhistory.component.html',
    styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
    products = {};
    cart;
    isloggedin = window.localStorage.getItem('token') !== null;
    showcart = false;

    constructor(private productService: ProductsService,
                private cartService: CartService) {
    }

    ngOnInit(): void {
        this.get_cart();
    }

    get_cart() {
        this.cartService.get_cart().subscribe(data => {
            this.cart = data;
            this.products = this.cart.products;
            this.showcart = true;
        }, error => {
            this.showcart = false;
        });
    }
    get_products(pk) {
        this.productService.get_products(pk).subscribe( data => {
             this.products = data;
        });
    }

}
