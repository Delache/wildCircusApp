import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../../shared/models/artist';
import { User } from '../../shared/models/user';
import { ArtistService } from '../../shared/services/artist.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists: Artist[];
  user: User;
  addOption: boolean;

  constructor( private userService: UserService,
               private artistService: ArtistService ) { }

  ngOnInit() {
    if (this.userService.user !== null ) {
      this.user = this.userService.user;
      if (this.user.role === 'admin') {
        this.addOption = true;
      }
    }
  }
  }

