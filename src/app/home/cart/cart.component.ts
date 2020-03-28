import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart;
    products;
    isloggedin = window.localStorage.getItem('token') !== null;

    constructor(private cartService: CartService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getCart();
    }

    ionViewWillEnter() {
        this.getCart();
        this.isloggedin = window.localStorage.getItem('token') !== null;
        if (!this.isloggedin) {
            this.router.navigate(['tabs/login']);
        }

    }

    getCart() {
        this.cartService.getCart().subscribe(
            data => {
                this.cart = data;
                this.products = this.cart.products;
                console.log(this.cart.products);
            }, error => {
                // this.utils.presentToast('Some Error Occurred');
            }
        );
    }

    decrement(pk) {
        console.log(pk);
    }

    increment(pk) {
        console.log(pk);
    }

    update_quantity() {
        console.log('dsad');
    }


}
