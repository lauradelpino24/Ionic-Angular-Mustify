import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistaPage } from './artista.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistaPageRoutingModule {}
