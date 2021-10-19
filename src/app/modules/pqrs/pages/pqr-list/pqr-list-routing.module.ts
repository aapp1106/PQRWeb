import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqrListComponent } from './pqr-list.component';

const routes: Routes = [{ path: '', component: PqrListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrListRoutingModule { }
