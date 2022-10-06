import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "http://localhost:13331/api/brands/getall";

  getBrands() : Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}