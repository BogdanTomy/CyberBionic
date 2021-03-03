import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  title = 'Add Product';
  data;
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();

  newProduct = {
    id: null,
    name: null,
    price: null,
    category: null
  };

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form): void {
    if ( this.newProduct.name && this.newProduct.name.trim() && this.newProduct.price && this.newProduct.category && this.newProduct.category <= 3 ) {
      this.data = this.newProduct;
      this.addProduct.emit(this.data);
    }
  }
}
