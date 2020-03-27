import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    baseurl = environment.baseurl;

    constructor(private httpClient: HttpClient) {
    }

    all_products(params?: any) {
        if (params) {
            console.log(params);
        }
        return this.httpClient.get(this.baseurl + 'product/', {params});
    }
}
