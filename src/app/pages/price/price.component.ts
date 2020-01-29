import { PriceService } from '../../shared/services/price.service';
import { Price } from '../../shared/models/price';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(private priceService: PriceService,
              private userService: UserService) { }
    user: User;
    prices: Price[];
    addOption: boolean;
    displayedColumns: string[] = ['type', 'category', 'value'];

    ngOnInit() {
      this.addOption = true;
      this.priceService.getPrices().subscribe((price) => {this.prices = price; });

      if (this.userService.user !== undefined) {
        this.user = this.userService.user;
        if (this.user.role === 'admin') {
          this.addOption = true;
        }
      }
    }

onDeletePrice(index: number, i: number) {
      this.priceService.deletePrice(index).subscribe(() => {
        this.prices.splice(i, 1);
        this.priceService.openSnackBar('Tranche', 'Supprimée');
      } );
    }
}
