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

    Login(paylod) {
        return this.httpClient.post(this.baseUrl + 'auth/login', paylod);
    }

    VerifyLogin() {
        const payload = {token: window.localStorage.getItem('token')};
        return this.httpClient.post(this.baseUrl + 'auth/verify-token', payload);
    }

}
