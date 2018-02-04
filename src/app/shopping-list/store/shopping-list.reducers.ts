import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';
import { reducerActions } from './shopping-list.actions';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case reducerActions.ADD_INGREDIENT:
      AddIng(state, action.payload);
      return {
        ...state,
        ingredients: [...state.ingredients]
      }
    case reducerActions.ADD_INGREDIENTS:
      AddListIngredients(state, action.payload);
      return {
        ...state,
        ingredients: [...state.ingredients]
      }
    case reducerActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      }
      const ingredients = [...state.ingredients];
      ingredients[action.payload.index] = updatedIngredient;
      return {        
        ...state,
        ingredients: ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      }
    case reducerActions.DELETE_INGREDIENT:
      const oldIngredient = [...state.ingredients];
      oldIngredient.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredient,
        editedIngredient: null,
        editedIngredientIndex: -1
      }
    case reducerActions.START_EDIT:
      const editedIngredient = {...state.ingredients[action.payload]};
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload
      }
    case reducerActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      }
    default:
      return state;
  }
}

function AddListIngredients(state: any, list: Ingredient[]): void {
  for (const ing of list) {
    AddIng(state, ing);
  }
}

function AddIng(state: any, element: Ingredient): void {
  const temp: Ingredient = state.ingredients.find(x => x.name === element.name);
  if (temp == null) {
    const ing = new Ingredient(element.name, element.amount);
    state.ingredients.push(ing);
  } else {
    temp.amount += element.amount;
  }
}
