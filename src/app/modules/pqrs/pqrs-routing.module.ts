import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqrsComponent } from './pqrs.component';

const routes: Routes = [
  //{ path: '', component: PqrsComponent }, 
  { path: '', loadChildren: () => import('./pages/pqr-list/pqr-list.module').then(m => m.PqrListModule) 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsRoutingModule { }
