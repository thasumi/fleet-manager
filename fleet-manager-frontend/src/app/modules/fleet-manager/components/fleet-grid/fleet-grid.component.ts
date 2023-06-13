import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/models/vehicleModel';
import { FleetManagerService } from 'src/app/services/fleet-manager.service';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-fleet-grid',
  templateUrl: './fleet-grid.component.html',
  styleUrls: ['./fleet-grid.component.sass'],
  providers: [FleetManagerService]
})
export class FleetGridComponent {
  vehicles: Vehicle[] = [];
  activeModal!: NgbModalRef;
  page: number = 1;
  pageSize: number = 10;
  unfilteredVehicles: Vehicle[] = [];
  searchForm= new FormControl('')
  


  constructor(
    private fleetManagerService: FleetManagerService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {

  }
  ngOnInit(): void {
    this.spinner.show();
    this.getVehicles();
    this.searchForm.valueChanges.subscribe(change => {
      this.vehicles = this.search(change);
      this.spinner.hide();
    })
  }

//SEARCH INPUT
  search(text: any): Vehicle[] {
    if (this.searchForm.value) {
      return this.unfilteredVehicles.filter(change => {
        return (
          change.plate.toLowerCase().includes(text.toLowerCase()) ||
          change.year.toString().includes(text.toLowerCase()) ||
          change.chassi.toLowerCase().includes(text.toLowerCase()) ||
          change.renavam.toLowerCase().includes(text.toLowerCase()) ||
          change.brand.toLowerCase().includes(text.toLowerCase()))
      })
    }
    return this.unfilteredVehicles;

  }

  //CRUD VEHICLE
  createVehicle(action: string) {
    this.activeModal = this.modalService.open(ModalComponent, { size: 'lg' });
    this.activeModal.componentInstance.action = action;
    this.activeModal.dismissed.subscribe(() => {
      this.getVehicles();
    });
  }

  getVehicles() {
    this.fleetManagerService.getAllVehicles().subscribe(res => {
      this.vehicles = res;
      this.unfilteredVehicles = this.vehicles;
      this.spinner.hide();
    });
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

  processSuccess(response: any) {
    this.toastr.success(response.message, ('Sucesso'), { timeOut: 30000, extendedTimeOut: 30000 });
    this.getVehicles();
  }

  processFail(response: any) {
    this.toastr.error(response.error, ('Erro'), { timeOut: 30000, extendedTimeOut: 30000 });
  }
}

