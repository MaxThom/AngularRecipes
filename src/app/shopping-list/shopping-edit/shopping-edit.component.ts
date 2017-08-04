import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;


  constructor(private IngredientData: ShoppingListService) { }

  ngOnInit() {
  }

  OnAddItem(): void {
    this.IngredientData.AddIngredient(new Ingredient(this.nameInput.nativeElement.value.toString(), this.amountInput.nativeElement.value));
    this.OnClear();
  }

  OnDeleteItem(): void {

  }

  OnClear(): void {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
