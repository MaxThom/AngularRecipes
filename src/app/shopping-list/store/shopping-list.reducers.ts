import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';
import { reducerActions } from './shopping-list.actions';



const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
}

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
