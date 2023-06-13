import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetManagerRoutingModule } from './fleet-manager-routing.module';
import { FleetGridComponent } from './components/fleet-grid/fleet-grid.component';
import { SharedModule } from '../shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FleetGridComponent,
  ],
  imports: [
    CommonModule,
    FleetManagerRoutingModule,
    SharedModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FleetManagerModule { }
