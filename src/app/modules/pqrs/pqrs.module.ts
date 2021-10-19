import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrsRoutingModule } from './pqrs-routing.module';
import { PqrsComponent } from './pqrs.component';
import { FormularioComponent } from './componets/formulario/formulario.component';


@NgModule({
  declarations: [
    PqrsComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    PqrsRoutingModule
  ]
})
export class PqrsModule { }
