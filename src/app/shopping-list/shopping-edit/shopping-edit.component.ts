import { Component, OnDestroy, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredientSelected: Ingredient;
  editMode: boolean = false;
  ingredientForm: FormGroup;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.ingredientSelected = data.editedIngredient;
          this.editMode = true;
          this.ingredientForm.setValue({
            'ingredientName': this.ingredientSelected.name,
            'ingredientAmount':  this.ingredientSelected.amount
          });
        } else {
          this.editMode = false;
        }

      }
    );

    this.ingredientForm = new FormGroup({
      'ingredientName': new FormControl(null, [Validators.required]),
      'ingredientAmount': new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
   }

  OnAddItem(): void {
    const newIngredient = new Ingredient(this.ingredientForm.value.ingredientName, this.ingredientForm.value.ingredientAmount);
    this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    this.OnClear();
  }

  OnDeleteItem(): void {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.OnClear();
  }

  OnClear(): void {
    this.ingredientForm.reset();
  }
}
