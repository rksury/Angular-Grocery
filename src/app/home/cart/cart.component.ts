import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {Toast} from 'ngx-toastr';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart;
    products;
    // isloggedin = window.localStorage.getItem('token') !== null;
    showcart = false;

    constructor(private cartService: CartService, private toast: Toast,
                private router: Router) {
    }

    ngOnInit(): void {
        this.get_cart();
    }

    get_cart() {
        this.cartService.get_cart().subscribe(data => {
            this.cart = data;
            this.products = this.cart.products;
            this.showcart = true;
        });
    }
}
