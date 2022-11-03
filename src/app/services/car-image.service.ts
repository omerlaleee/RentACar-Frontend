import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "http://localhost:13331/api/";

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let getCarImagesByCarId = this.apiUrl + "carimages/getcarimagesbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(getCarImagesByCarId);
  }
}
