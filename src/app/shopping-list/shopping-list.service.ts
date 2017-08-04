import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() {

  }
  GetIngredientList(): Ingredient[] { return this.ingredients.slice(); }

  AddIngredient(element: Ingredient): void  {
    this.ingredients.push(element);
    this.ingredientsChanged.next(this.ingredients);
  }

  AddListIngredients(list: Ingredient[]): void {

    for (let ing of list)
    {
      let temp: Ingredient = this.ingredients.find(x => x.name === ing.name);
      if (temp == null)
        this.ingredients.push(ing);
      else
        temp.amount += ing.amount;
    }

    this.ingredientsChanged.next(this.ingredients);
  }
}
