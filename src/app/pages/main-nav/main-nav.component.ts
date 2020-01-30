import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  adminOption: boolean;
  user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public dialog: MatDialog,
              public router: Router,
              public userService: UserService) {}

    ngOnInit() {
      if (this.userService.user !== undefined) {
        this.user = this.userService.user;
        if ( this.user.role === 'admin') {
          this.adminOption = true;
        }
      }
    }
    onLogout() {
      localStorage.clear();
      this.userService.user = null;
      this.router.navigate(['/presentation']);
    }
}
