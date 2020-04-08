import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    baseUrl = environment.baseurl;

    constructor(private httpClient: HttpClient) {
    }

        all_category() {
        return this.httpClient.get(this.baseUrl + 'product/categories');
        }
}

