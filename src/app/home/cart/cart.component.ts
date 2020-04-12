import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart;
    products;
    isloggedin = window.localStorage.getItem('token') !== null;
    showcart = false;
    private RazorpayCheckout: any;

    constructor(private cartService: CartService, private toast: ToastrService,
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
        }, error => {
            this.showcart = false;
        });
    }

    add_product(id) {
        this.cartService.add_item(id).subscribe(data => {
            this.cart = data;
            this.products = this.cart.products;
        }, error => {
            this.showcart = false;
        });
    }


    remove_product(pk) {
        this.cartService.remove_item(pk).subscribe(data => {
            this.cart = data;
            this.products = this.cart.products;
        }, error => {
            this.get_cart();
        });
    }

    place_order() {
        this.cartService.place_order().subscribe(data => {
            this.router.navigate(['/tabs/order-history']);

        }, error => {
            this.get_cart();
        });
    }

    payment() {
        const options = {
            description: 'Checkout',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR', // your 3 letter currency code
            key: 'rzp_test_2nAiN0h9QN68NR', // your Key Id from Razorpay dashboard
            amount: this.cart.final_price * 100, // Payment amount in smallest denomiation e.g. cents for USD
            name: 'The Saving Bazaar',
            theme: {
                color: '#F37254'
            },
            modal: {
                ondismiss() {
                    alert('dismissed');
                }
            }
        };
        const successCallback = (paymentid) => {
            this.cartService.capture_payment(paymentid).subscribe(data => {
                this.place_order();
            }, error => {
                this.place_order();
            });
            alert('payment_id: ' + paymentid);
        };

        const cancelCallback = (error) => {
            alert(error.description + ' (Error ' + error.code + ')');
        };

        this.RazorpayCheckout.open(options, successCallback, cancelCallback);
    }

    doRefresh(ev) {
        this.get_cart();
        ev.target.complete();
    }
}
