import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredientSelectionSubscription: Subscription;
  ingredientSelected: Ingredient;
  idSelected: number;
  editMode: boolean = false;
  ingredientForm: FormGroup;

  constructor(private IngredientData: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.ingredientSelectionSubscription = this.IngredientData.ingredientSelected.subscribe(
      (index: number) => {
        this.idSelected = index;
        this.ingredientSelected = this.IngredientData.GetIngredient(index);
        this.editMode = true;

        this.ingredientForm.setValue({
          'ingredientName': this.ingredientSelected.name,
          'ingredientAmount':  this.ingredientSelected.amount
        });

        console.log(index);
      }
    );


    this.ingredientForm = new FormGroup({
      'ingredientName': new FormControl(null, [Validators.required]),
      'ingredientAmount': new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.ingredientSelectionSubscription.unsubscribe();
  }

  OnAddItem(): void {
    console.log(this.ingredientForm);
    const newIngredient = new Ingredient(this.ingredientForm.value.ingredientName, this.ingredientForm.value.ingredientAmount);
    // this.IngredientData.AddIngredient(newIngredient);

    this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));

    this.OnClear();
  }

  OnDeleteItem(): void {
    this.IngredientData.DeleteIngredient(this.idSelected);
    this.OnClear();
  }

  OnClear(): void {
    this.ingredientForm.reset();
  }
}
