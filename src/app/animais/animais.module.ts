import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListasAnimaisComponent } from './listas-animais/listas-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';

@NgModule({
  declarations: [
    ListasAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalheAnimalComponent,
    ComentariosComponent,
    NovoAnimalComponent,
  ],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule, SharedModule],
})
export class AnimaisModule {}
