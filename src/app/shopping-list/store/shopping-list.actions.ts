import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export enum reducerActions {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  START_EDIT = 'START_EDIT',
  STOP_EDIT = 'STOP_EDIT'
}

export class AddIngredient implements Action {
  readonly type = reducerActions.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = reducerActions.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = reducerActions.UPDATE_INGREDIENT;

  constructor(public payload: { index: number, ingredient: Ingredient}) {}
}

export class DeleteIngredient implements Action {
  readonly type = reducerActions.DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = reducerActions.START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = reducerActions.STOP_EDIT;
}

export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit;
