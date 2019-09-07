import {Component, OnInit} from '@angular/core';
import {VehicleService} from "./vehicle.service";
import {Vehicle} from "./vehicle.model";

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  errorMsg: String = "";

  constructor(private vehicleService: VehicleService) {
  }

  async ngOnInit() {
    try {
      const vehicles = await this.vehicleService.fetchVehicles();
      this.vehicles = this.vehicleService.transformToGetImageEasier(vehicles);
    }

    catch (e) {
      this.errorMsg= e;
    }

  }
}
