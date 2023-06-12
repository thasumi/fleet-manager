import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetManagerRoutingModule } from './fleet-manager-routing.module';
import { FleetGridComponent } from './components/fleet-grid/fleet-grid.component';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';


@NgModule({
  declarations: [
    FleetGridComponent,
    CreateVehicleComponent,
    UpdateVehicleComponent
  ],
  imports: [
    CommonModule,
    FleetManagerRoutingModule
  ]
})
export class FleetManagerModule { }