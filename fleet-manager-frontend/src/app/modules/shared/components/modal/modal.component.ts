import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Vehicle, VehicleCreate } from 'src/app/models/vehicleModel';
import { FleetManagerService } from 'src/app/services/fleet-manager.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

  vehicleId: string = '';
  @Input() vehicle!: Vehicle;
  @Input() action: string = '';


  vehicleForm!: FormGroup;
  formResult: string = '';
  updatedVehicle!: Vehicle;
  createdVehicle!: VehicleCreate;

  constructor(
    private modalService: NgbModal,
    private fleetManagerService: FleetManagerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    console.log(this.vehicle)
    this.vehicleForm = this.formBuilder.group({
      plate: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
      year: ['', Validators.required],
    })
    this.checkEditOrCreate();

  }

  close() {
    this.modalService.dismissAll();
  }

  checkEditOrCreate() {
    if (this.action === 'update') {
      this.vehicleForm.get('plate')?.setValue(this.vehicle.plate);
      this.vehicleForm.get('brand')?.setValue(this.vehicle.brand);
      this.vehicleForm.get('model')?.setValue(this.vehicle.model);
      this.vehicleForm.get('chassi')?.setValue(this.vehicle.chassi);
      this.vehicleForm.get('renavam')?.setValue(this.vehicle.renavam);
      this.vehicleForm.get('year')?.setValue(this.vehicle.year);
    }
  }


  //update
  submit() {
    if (this.action === 'update') {
      if (confirm("Deseja realmente editar este veículo?")) {
        if (this.vehicleForm.dirty && this.vehicleForm.valid) {
          this.updatedVehicle = { ...this.vehicleForm.value }
          this.updatedVehicle.id = this.vehicle.id;

          this.fleetManagerService.updateVehicleById(this.updatedVehicle).subscribe({
            next: (success) => {
              this.processSuccess(success)
            }, error: (fail) => {
              this.processFail(fail)
            }
          })
        }
      }
    } else {
      if (confirm("Deseja realmente criar este veículo?")) {
        if (this.vehicleForm.dirty && this.vehicleForm.valid) {
          this.createdVehicle = { ...this.vehicleForm.value }

          this.fleetManagerService.createVehicle(this.createdVehicle).subscribe({
            next: (success) => {
              this.processSuccess(success)
            }, error: (fail) => {
              this.processFail(fail)
            }
          })
        }
      }
    }
  }

  //create


  processSuccess(response: any) {
    this.toastr.success(response.message, ('Sucesso'), { timeOut: 30000, extendedTimeOut: 30000 });
    this.close();
  }

  processFail(response: any) {
    this.toastr.error(response.error, ('Erro'), { timeOut: 30000, extendedTimeOut: 30000 });
  }
}


