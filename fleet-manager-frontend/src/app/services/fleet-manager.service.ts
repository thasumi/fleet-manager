import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vehicle } from '../models/vehicleModel';


@Injectable({
  providedIn: 'root'
})
export class FleetManagerService {

  constructor(private http: HttpClient) { }

  getAllVehicles() {
    return this.http.get<Vehicle[]>(`http://localhost:3000/allVehicles`);
  }

  getVehicleById(id: string) {
    return this.http.get<Vehicle>(`http://localhost:3000/allVehicles/${id}/`);
  }

  updateVehicleById(vehicle:Vehicle) {
    return this.http.put<Vehicle>(`http://localhost:3000/updateVehicleById`,{vehicle:vehicle});
  }

}
