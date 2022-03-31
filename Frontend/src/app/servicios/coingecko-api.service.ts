import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoApiService {
  private API_CRIPTOMONEDAS = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&ids=bitcoin%2C%20ethereum%2C%20polkadot%2C%20tether%2C%20binancecoin%2C%20solana%2C%20cardano%2C%20dogecoin%2C%20dai%2C%20smooth-love-potion&order=market_cap_desc&per_page=100&page=1&sparkline=true"

  constructor(private http: HttpClient) { }
  
  public getAllCoins(): Observable<any>{
    return this.http.get(this.API_CRIPTOMONEDAS)
  }
}
