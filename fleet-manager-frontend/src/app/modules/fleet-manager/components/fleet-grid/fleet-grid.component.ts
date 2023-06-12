import { Component } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicleModel';
import { FleetManagerService } from 'src/app/services/fleet-manager.service';

@Component({
  selector: 'app-fleet-grid',
  templateUrl: './fleet-grid.component.html',
  styleUrls: ['./fleet-grid.component.sass'],
  providers: [FleetManagerService]
})
export class FleetGridComponent {
  vehicles : Vehicle[] = [];

  constructor(private fleetManagerService: FleetManagerService) {

  }
  ngOnInit(): void {
    this.fleetManagerService.getAllVehicles().subscribe(res => {
      this.vehicles = res;
      console.log(this.vehicles)
    })
  }
}
