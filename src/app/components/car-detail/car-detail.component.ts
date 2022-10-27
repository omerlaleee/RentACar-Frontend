import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }
  dataLoaded = false;
  carDetails: CarDetailDto;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"]);
    })

  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(response => {
      this.carDetails = response;
      this.dataLoaded = true;
    })
    console.log(this.carDetails.carName + " / " + this.carDetails.colorName);
  }
}
