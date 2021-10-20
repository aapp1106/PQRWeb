import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrsRoutingModule } from './pqrs-routing.module';
import { PqrsComponent } from './pqrs.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    PqrsComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    PqrsRoutingModule,
    //MaterialModule
  ]
})
export class PqrsModule { }
