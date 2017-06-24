import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output('newIngredient') newIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  OnAddItem(): void {
    this.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value.toString(), this.amountInput.nativeElement.value));
    this.OnClear();
  }

  OnDeleteItem(): void {

  }

  OnClear(): void {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
