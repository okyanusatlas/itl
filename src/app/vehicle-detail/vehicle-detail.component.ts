import {Component, Input, OnInit} from '@angular/core';
import {VehicleDetailService} from "./vehicle-detail.service";

@Component({
  selector: 'vehicle-detail',
  templateUrl: './vehicle-detail.component.html'
})
export class VehicleDetailComponent implements OnInit {
  @Input() vehicleId: String;

  vehicle: Object = {};
  errorMsg: String = "";

  constructor(private vehicleDetailService: VehicleDetailService) {
  }


  async ngOnInit() {
    if (this.vehicleId) {
      try {
        this.vehicle = await this.vehicleDetailService.fetchOneVehicle(this.vehicleId);
      } catch (e) {
        this.errorMsg = e;
      }

    }
    console.log(this.vehicle);
  }
}
