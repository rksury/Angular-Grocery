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

  get_all_categories() {
    return this.httpClient.get(this.baseurl + 'product/categories');
  }
}
