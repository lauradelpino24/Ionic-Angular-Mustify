import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nuevasCanciones: any[] = [];

  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService, private router: Router) {

    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
      }, (errorServicio) => {


        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;

      });

  }

}
