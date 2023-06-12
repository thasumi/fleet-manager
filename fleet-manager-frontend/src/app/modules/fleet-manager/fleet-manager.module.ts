import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetManagerRoutingModule } from './fleet-manager-routing.module';
import { FleetGridComponent } from './components/fleet-grid/fleet-grid.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FleetGridComponent,
  ],
  imports: [
    CommonModule,
    FleetManagerRoutingModule,
    SharedModule
  ]
})
export class FleetManagerModule { }
