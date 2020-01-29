import { RepresentationService } from './../../shared/services/Representation.service';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Representation } from '../../shared/models/representation';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.scss']
})
export class RepresentationComponent implements OnInit {
  @Input() checked: boolean;
  representations: Representation[];
  searchWord: string;
  user?: User;
  name: string;
  status = new FormControl();
  adminOption: boolean;

  constructor(private representationService: RepresentationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    if (this.userService.user !== undefined) {
      this.user = this.userService.user;
      if ( this.user.role === 'admin') {
        this.adminOption = true;
      }
    }
    this.representationService.getAllRepresentations().subscribe((data: Representation[]) => {
    this.representations = data; });
  }

  search(word: string) {
      this.representationService.getRepresentationByWord(word).subscribe( (data: Representation[]) => {
        this.representations = data;
      });
    }
  refresh() {
    this.representationService.getAll().subscribe((datas) => {this.representations = datas; });
  }

  onDeleteFile(index: number, i: number) {
    this.representationService.delete(index).subscribe(() => {
    this.representationService.openSnackBar('Tranche', 'Supprimée');
    this.refresh();
    this.representations.splice(i, 1);
    });
  }

  onChange(toggle, index: number) {
      this.representations[index].full = toggle.checked;
      this.representationService.modifyRepresentation(this.representations[index]).subscribe();
  }
}
