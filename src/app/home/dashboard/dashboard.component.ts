import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {from} from 'rxjs';
import {ProductsService} from '../products/products.service';
import {CartService} from '../cart/cart.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    products = {};
    showProducts = true;
    special;
    cart;

    constructor(private dashboardService: DashboardService,
                private productService: ProductsService,
                private cartService: CartService) {
    }

    ngOnInit(): void {

        this.products_data();
    }

    products_data() {
        this.productService.get_all_products().subscribe(data => {
            this.products = data;
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
