import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/models/vehicleModel';
import { FleetManagerService } from 'src/app/services/fleet-manager.service';
import { UpdateVehicleComponent } from '../update-vehicle/update-vehicle.component';

@Component({
  selector: 'app-fleet-grid',
  templateUrl: './fleet-grid.component.html',
  styleUrls: ['./fleet-grid.component.sass'],
  providers: [FleetManagerService]
})
export class FleetGridComponent {
  vehicles : Vehicle[] = [];

  constructor(
    private fleetManagerService: FleetManagerService,
    private modalService: NgbModal) {

  }
  ngOnInit(): void {
    this.fleetManagerService.getAllVehicles().subscribe(res => {
      this.vehicles = res;
    })
  }

  editVehicle(vehicle:Vehicle) {
    const activeModal: NgbModalRef = this.modalService.open(UpdateVehicleComponent, { size: 'lg' });
    activeModal.componentInstance.vehicle = vehicle;
  }
}
