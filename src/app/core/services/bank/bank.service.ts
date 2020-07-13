import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn:'root'
})
export class BankService {
  constructor(private http: HttpClient) {
  }

  getBanks() {
    return this.http.get(`${environment.url_api}banks`)
  }
}
