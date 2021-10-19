import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrListRoutingModule } from './pqr-list-routing.module';
import { PqrListComponent } from './pqr-list.component';


@NgModule({
  declarations: [
    PqrListComponent
  ],
  imports: [
    CommonModule,
    PqrListRoutingModule
  ]
})
export class PqrListModule { }
