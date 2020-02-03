import { PriceService } from '../../shared/services/price.service';
import { Price } from '../../shared/models/price';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(private priceService: PriceService,
              private userService: UserService,
              private formbuilder: FormBuilder) { }
    user: User;
    prices: Price[];
    adminOption: boolean;
    displayedColumns: string[];
    priceForm: FormGroup;

    ngOnInit() {
      this.refresh();
      if (this.userService.user !== null ) {
        this.user = this.userService.user;
        if (this.user.role === 'admin') {
          this.adminOption = true;
          this.displayedColumns = ['type', 'category', 'value', 'id' ];
        } else {
          this.displayedColumns = ['type', 'category', 'value' ];
        }
      }
      this.priceForm = this.formbuilder.group({
        type:  ['', Validators.required],
        category:  ['', Validators.required],
        value: ['', Validators.required]
      });
    }

    refresh() {
      this.priceService.getPrices().subscribe((price) => {this.prices = price; });
    }
    onDeletePrice(index: number) {
      this.prices.slice(index, 1);
      this.priceService.deletePrice(index).subscribe(() => {
      this.priceService.openSnackBar('Tranche', 'Supprimée');
      this.refresh();
      });
    }
    resetForm() {
      this.priceForm.reset();
    }

    onSubmitPriceForm() {
      this.priceService.createPrice(this.priceForm.value).subscribe(() => {
        this.prices.push(this.priceForm.value);
        this.priceService.openSnackBar('Tranche', 'Ajoutée');
        this.resetForm();  });
  }

}
