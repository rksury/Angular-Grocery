import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    baseUrl = environment.baseurl;

    constructor(private httpClient: HttpClient) {
    }

    get_products(params?: any) {
        {
            console.log(params);
        }
        return this.httpClient.get(this.baseUrl + 'product/', {params});
    }
    get_all_products() {
        return this.httpClient.get(this.baseUrl + 'product/', );
    }
}
