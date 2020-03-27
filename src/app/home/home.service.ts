import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    baseurl = environment.baseurl;

    constructor(private httpClient: HttpClient) {
    }

        all_category() {
        return this.httpClient.get(this.baseurl + 'product/categories');
        }
}

