import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  artistas: any[] = [];

  constructor( private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtistas( termino )
          .subscribe( (data: any) => {
            console.log(data);
            this.artistas = data;
          });
  }

}
