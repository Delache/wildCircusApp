import { ServerUrlPipe } from './../../../shared/serveurUrl';
import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Artist } from '../../../shared/models/artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: Artist;
  constructor() { }

  ngOnInit() {
  }

}
