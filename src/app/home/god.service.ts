import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GodService {
baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
  }

  get headers() {
    const httpOptions = {
      headers: new HttpHeaders({
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
        }
      )
    };
    return httpOptions;
  }

  get(url, queryparams?) {
    return this.httpClient.get(this.baseUrl, {params: queryparams});
  }

  post(url, payload) {
    return this.httpClient.post(this.baseUrl + url, payload);
  }


}
