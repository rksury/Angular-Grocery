import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products/products.service';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
   products = {};
    showProducts = true;
    special;
    cart;
    order;

  constructor( private productService: ProductsService,
               private cartService: CartService) { }

  ngOnInit(): void {
       this.products_data();
  }
products_data() {
        this.productService.get_all_products().subscribe(data => {
            this.products = data;
        });
    }
}
