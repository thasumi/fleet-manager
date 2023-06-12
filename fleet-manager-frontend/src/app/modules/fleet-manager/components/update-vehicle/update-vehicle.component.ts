import { Component } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicleModel';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.sass']
})
export class UpdateVehicleComponent {
vehicleId: string = '';
vehicle!: Vehicle;
action: string = 'update'

ngOnInit(): void {

}
}
