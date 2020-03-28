import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl = environment.baseurl;

    constructor(private httpClient: HttpClient) {
    }

    Login(data) {
        return this.httpClient.post(this.baseUrl + 'auth/login', data
        );
    }
}
