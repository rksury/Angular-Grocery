import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    baseurl = environment.baseurl;

    constructor(private httpclient: HttpClient) {
    }


    add_to_cart(pk, q) {
        const data = {product: pk, quantity: 1, package: q};
        const httpOptions = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                }
            )
        };
        return this.httpclient.post(this.baseurl + 'cart/', data, httpOptions);

    }

    getCart() {
        const httpOptions = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                }
            )
        };
        return this.httpclient.get(this.baseurl + 'cart/', httpOptions);

    }

}
