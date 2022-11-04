import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { EntityResponseModel } from '../models/entityResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44329/api/";

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let getAllUrl = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(getAllUrl);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let getCarsByBrandIdUrl = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(getCarsByBrandIdUrl);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let getCarsByColorIdUrl = this.apiUrl + "cars/getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(getCarsByColorIdUrl);
  }

  getCarById(carId: number): Observable<EntityResponseModel<CarDetailDto>> {
    let getCarByIdUrl = this.apiUrl + "cars/getcardetailbyid?id=" + carId;
    return this.httpClient.get<EntityResponseModel<CarDetailDto>>(getCarByIdUrl);
  }

}
