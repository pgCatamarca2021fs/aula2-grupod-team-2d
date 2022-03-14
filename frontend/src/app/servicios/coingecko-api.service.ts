import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoApiService {
  private API_CRIPTOMONEDAS = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false"

  constructor(private http: HttpClient) { }
  
  public getAllCoins(): Observable<any>{
    return this.http.get(this.API_CRIPTOMONEDAS)
  }
}
