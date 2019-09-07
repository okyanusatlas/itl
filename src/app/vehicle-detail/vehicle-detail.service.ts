import {Injectable} from '@angular/core';
import {VehicleDetailModel} from "./vehicle-detail.model";

@Injectable({
  providedIn: 'root',
})
export class VehicleDetailService {
  // @ts-ignore
  async fetchOneVehicle(vehicleId): VehicleDetailModel {
    const response = await fetch(`https://itg-prd-recruit.appspot.com/api/vehicle/${vehicleId}`);
    return await response.json();
  }
}
