import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/models/vehicleModel';
import { FleetManagerService } from 'src/app/services/fleet-manager.service';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fleet-grid',
  templateUrl: './fleet-grid.component.html',
  styleUrls: ['./fleet-grid.component.sass'],
  providers: [FleetManagerService]
})
export class FleetGridComponent {
  vehicles: Vehicle[] = [];
  activeModal!: NgbModalRef;

  constructor(
    private fleetManagerService: FleetManagerService,
    private modalService: NgbModal,
    private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.getVehicles();

  }

  editVehicle(vehicle: Vehicle, action: string) {
    this.activeModal = this.modalService.open(ModalComponent, { size: 'lg' });
    this.activeModal.componentInstance.vehicle = vehicle;
    this.activeModal.componentInstance.action = action;
    this.activeModal.dismissed.subscribe(() => {
      this.getVehicles();
    });
  }

  deleteVehicle(vehicleId: string) {
    if (confirm("Deseja realmente excluir este veículo?")) {
      this.fleetManagerService.deleteVehicleById(vehicleId).subscribe({
        next: (success) => {
          this.processSuccess(success)
        }, error: (fail) => {
          this.processFail(fail)
        }
      });
    }
  }

  getVehicles() {
    this.fleetManagerService.getAllVehicles().subscribe(res => {
      this.vehicles = res;
    });
  }

  processSuccess(response: any) {
    this.toastr.success(response.message, ('Sucesso'), { timeOut: 30000, extendedTimeOut: 30000 });
    this.getVehicles();
  }

  processFail(response: any) {
    this.toastr.error(response.error, ('Erro'), { timeOut: 30000, extendedTimeOut: 30000 });
  }
}

