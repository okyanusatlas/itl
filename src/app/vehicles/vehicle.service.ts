import {Injectable} from '@angular/core';
import {Vehicle} from "./vehicle.model";

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  transformToGetImageEasier(vehicles): Vehicle[] {
    return vehicles.map(vehicle => {
      vehicle.img = vehicle.media[0].url;
      return vehicle;
    })
  }

  async fetchVehicles() {

    const response = await fetch("https://itg-prd-recruit.appspot.com/api/vehicles/");
    return await response.json();
  }

}
