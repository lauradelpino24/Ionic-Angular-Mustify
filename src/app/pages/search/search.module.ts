import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { NoimagePipe } from "../../pipes/noimage.pipe";
import { TarjetasComponent } from "../../components/tarjetas/tarjetas.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPage,
    TarjetasComponent,
    NoimagePipe,
    NavbarComponent
  ]
})
export class SearchPageModule {}
