import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl = environment.baseurl;

    constructor(private httpClient: HttpClient, private router: Router) {
    }
    Login(paylod) {
        return this.httpClient.post(this.baseUrl + 'auth/login', paylod);
    }

    verifyToken() {
        const payload = {token: window.localStorage.getItem('token')};
        return this.httpClient.post(this.baseUrl + 'auth/verify-token', payload);
    }

    logOut() {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    }
}


