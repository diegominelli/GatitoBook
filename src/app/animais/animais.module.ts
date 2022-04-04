import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListasAnimaisComponent } from './listas-animais/listas-animais.component';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [
    ListasAnimaisComponent,
    AnimalComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
