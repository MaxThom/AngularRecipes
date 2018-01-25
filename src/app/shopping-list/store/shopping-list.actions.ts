import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export enum reducerActions {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS'
}

export class AddIngredient implements Action {
  readonly type = reducerActions.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = reducerActions.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export type ShoppingListActions = AddIngredient | AddIngredients;
