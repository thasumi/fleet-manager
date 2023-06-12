import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from 'src/app/models/vehicleModel';
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

  constructor(
    private modalService: NgbModal,
    private fleetManagerService: FleetManagerService) {
  }

  ngOnInit(): void {
    this.checkEditOrCreate();
    console.log(this.vehicle)
    console.log(this.action)

  }

  close() {
    this.modalService.dismissAll();
  }

  checkEditOrCreate() {

  }
}

