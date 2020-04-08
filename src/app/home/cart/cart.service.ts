import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    baseUrl = environment.baseurl;

    constructor(private httpclient: HttpClient) {
    }

    add_to_cart(pk) {
        const data = { product: pk, quantity: 1};
        const httpOption = {
            headers: new HttpHeaders({
                    Authorization: 'Bearer' + window.localStorage.getItem('token')
            })
        };
        return this.httpclient.post( this.baseUrl + 'cart/', data, httpOption);
    }
    get_cart() {
        const httpOption = {
            headers: new HttpHeaders( {
                Authorization: 'Bearer' +  window.localStorage.getItem('token')
            })
        };
        return this.httpclient.get(this.baseUrl + '/cart', httpOption);
    }


}
