import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListasAnimaisComponent } from './listas-animais/listas-animais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListasAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: 'novo',
    component: NovoAnimalComponent,
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
