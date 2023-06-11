import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/navegation/components/not-found/not-found.component';

const routes: Routes = [
{ path: 'home', loadChildren: () => import('./modules/fleet-manager/fleet-manager.module').then(m => m.FleetManagerModule)},

{ path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
