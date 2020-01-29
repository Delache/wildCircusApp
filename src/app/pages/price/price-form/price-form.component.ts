import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceService } from '../../../shared/services/price.service';


@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent implements OnInit {

  constructor(private priceService: PriceService,
              private formbuilder: FormBuilder) { }

  priceForm: FormGroup;

  ngOnInit() {
    this.priceForm = this.formbuilder.group({
      type:  ['', Validators.required],
      category:  ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  resetForm() {
    this.priceForm.reset();
  }

  onSubmitPriceForm() {
    this.priceService.createPrice(this.priceForm.value).subscribe(() => {
      this.priceService.openSnackBar('Tranche', 'Ajoutée');
      this.resetForm();  });
}

}
