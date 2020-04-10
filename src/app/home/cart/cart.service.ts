import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    baseUrl = environment.baseurl;

    constructor(private httpClient: HttpClient) {
    }

    add_to_cart(pk) {
        const data = { product: pk, quantity: 1};
        const httpOption = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
            })
        };
        return this.httpClient.post( this.baseUrl + 'cart/', data, httpOption);
    }
    get_cart() {
        const httpOption = {
            headers: new HttpHeaders( {
                Authorization: 'Bearer ' +  window.localStorage.getItem('token')
            })
        };
        return this.httpClient.get(this.baseUrl + 'cart/', httpOption);
    }

     add_item(pk) {
        const httpOptions = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                }
            )
        };
        const data = {id: pk};
        return this.httpClient.post(this.baseUrl + 'cart/add-item', data, httpOptions);
    }

    remove_item(pk) {
        const httpOptions = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                }
            )
        };
        const data = {id: pk};
        return this.httpClient.post(this.baseUrl + 'cart/remove-item', data, httpOptions);
    }

     place_order() {
        const httpOptions = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                }
            )
        };
        return this.httpClient.post(this.baseUrl + 'cart/order', null, httpOptions);
    }

    capture_payment(paymentid) {
        const httpOptions = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                }
            )
        };
        const data = {
            payment_id: paymentid,
            mode: 'RAZORPAY'

        };
        return this.httpClient.post(this.baseUrl + 'product/capture-payment', data, httpOptions);

    }



}
