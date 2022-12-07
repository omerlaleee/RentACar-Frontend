import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  currentCar: CarDetailDto;
  cars: CarDetailDto[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  brandFilter: Brand;
  colorFilter: Color;
  dataLoaded = false;
  filterText = "";

  constructor(private carService: CarService, private brandService: BrandService, private colorService: ColorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
      }
      else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"]);
      }
      else {
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentCar(car: CarDetailDto) {
    this.currentCar = car;
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    });
  }
}
