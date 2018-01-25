import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export enum reducerActions {
  ADD_INGREDIENT = 'ADD_INGREDIENT'
}

export class AddIngredient implements Action {
  readonly type = reducerActions.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export type ShoppingListActions = AddIngredient;
