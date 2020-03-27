import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    baseurl = environment.baseurl

    constructor(private httpClient: HttpClient) {
    }
    all_products() {
        return this.httpClient.get(this.baseurl + 'product/');
    }
}

