import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetGridComponent } from './components/fleet-grid/fleet-grid.component';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './components/delete-vehicle/delete-vehicle.component';
import { FleetManagerRoutingModule } from './fleet-manager-routing.module';



@NgModule({
  declarations: [
    FleetGridComponent,
    CreateVehicleComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent
  ],
  imports: [
    CommonModule,
    FleetManagerRoutingModule
  ]
})
export class FleetManagerModule { }
