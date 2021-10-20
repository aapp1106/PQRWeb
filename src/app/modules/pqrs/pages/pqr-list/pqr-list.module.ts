import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrListRoutingModule } from './pqr-list-routing.module';
import { PqrListComponent } from './pqr-list.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    PqrListComponent
  ],
  imports: [
    CommonModule,
    PqrListRoutingModule,
    MaterialModule
  ]
})
export class PqrListModule { }
