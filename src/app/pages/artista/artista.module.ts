import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaPageRoutingModule } from './artista-routing.module';

import { ArtistaPage } from './artista.page';

// import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DomseguroPipe } from "../../pipes/domseguro.pipe";
//import { NoimagePipe } from "../../pipes/noimage.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaPageRoutingModule
  ],
  declarations: [
    ArtistaPage,
    // NavbarComponent,
    DomseguroPipe,
    //NoimagePipe
  ]
})
export class ArtistaPageModule {}
