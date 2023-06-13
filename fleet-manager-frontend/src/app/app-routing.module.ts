import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/navigate/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/fleet-manager/fleet-manager.module').then(m => m.FleetManagerModule)},

  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
