import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetGridComponent } from './components/fleet-grid/fleet-grid.component';

const routes: Routes = [
  {path: '', component: FleetGridComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetManagerRoutingModule { }
