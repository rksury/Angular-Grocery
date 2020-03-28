import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SignupService {
    baseUrl = environment.baseurl

    constructor(private httpClient: HttpClient) {
    }

    signup(data) {
      return this.httpClient.post(this.baseUrl + 'auth/register', data);
    }
}
