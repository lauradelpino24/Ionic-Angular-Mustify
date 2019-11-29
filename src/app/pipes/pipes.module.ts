import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoimagePipe } from "./noimage.pipe";
import { DomseguroPipe } from "./domseguro.pipe";


@NgModule({
  declarations: [
    NoimagePipe,
    DomseguroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoimagePipe,
    DomseguroPipe
  ]
})
export class PipesModule { }
