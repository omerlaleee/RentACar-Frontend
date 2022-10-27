import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "http://localhost:13331/api/";

  getCars(): Observable<ListResponseModel<Car>> {
    let getAllUrl = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(getAllUrl);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let getCarsByBrandIdUrl = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(getCarsByBrandIdUrl);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let getCarsByColorIdUrl = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(getCarsByColorIdUrl);
  }
  
}
