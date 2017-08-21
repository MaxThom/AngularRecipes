import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<number>();

  private ingredients: Ingredient[] = [];

  constructor() {

  }
  GetIngredientList(): Ingredient[] { return this.ingredients.slice(); }

  GetIngredient(id: number): Ingredient { return this.ingredients.slice(id, id + 1)[0]; }

  AddIngredient(element: Ingredient): void  {
    this.AddIng(element);
  }

  AddListIngredients(list: Ingredient[]): void {
    for (let ing of list)
    {
      this.AddIng(ing);
    }
  }

  DeleteIngredient(id: number): void {
    this.ingredients.splice(id, 1);
    this.ingredientsChanged.next(this.ingredients);
  }

  private AddIng(element: Ingredient): void {

    let temp: Ingredient = this.ingredients.find(x => x.name === element.name);
    if (temp == null) {
      const ing = new Ingredient(element.name, element.amount);
      this.ingredients.push(ing);
    }
    else
      temp.amount += element.amount;

    this.ingredientsChanged.next(this.ingredients);
  }
}
