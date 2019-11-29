import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../components/components.module";

import { HomePage } from './home.page';

 import { NoimagePipe } from "../../pipes/noimage.pipe";
 import { TarjetasComponent } from "../../components/tarjetas/tarjetas.component";
 import { NavbarComponent } from "../../components/navbar/navbar.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    TarjetasComponent,
    NoimagePipe,
    NavbarComponent
  ]
})
export class HomePageModule {}
