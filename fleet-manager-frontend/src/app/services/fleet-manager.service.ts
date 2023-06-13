import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BrandsAndModels, Vehicle, VehicleCreate } from '../models/vehicleModel';


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

  deleteVehicleById(vehicleId: string) {
    return this.http.delete<Vehicle>(`http://localhost:3000/deleteVehicleById/${vehicleId}/`);
  }

  createVehicle(vehicle: VehicleCreate) {
    return this.http.post(`http://localhost:3000/createNewVehicle`, {vehicle:vehicle});
  }

  getBrandsAndModels() {
    return this.http.get<BrandsAndModels[]>(`http://localhost:3000/brandsAndModels`);
  }

}
