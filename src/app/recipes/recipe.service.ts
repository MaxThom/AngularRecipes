import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tomato Sauce', 'Tomato Sauce made from an italian mamamia', 'http://www.seriouseats.com/recipes/assets_c/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-thumb-1500xauto-411319.jpg',
              [new Ingredient('Tomato', 20), new Ingredient('Oignon', 2), new Ingredient('Basilic Leaves', 10)]),
    new Recipe('Homemade Sushi', 'Sushi made of tuna, salmon, shrimps and more', 'http://www.sushibartoronto.ca/assets/images/sushi-bar.jpg',
              [new Ingredient('Japenense Rice (gram)', 200), new Ingredient('Algua', 20), new Ingredient('Salmon', 2), new Ingredient('Shrimps', 20), new Ingredient('Cocumber', 3)]),
    new Recipe('Poutine', 'Renown meal in Quebec province in Canada', 'http://storage-cube.quebecormedia.com/v1/cl_prod/canadian_living/016a62c51915ef984e8281124f5f6850fc93d013/ultimate-poutine.jpg',
              [new Ingredient('French Fries', 100), new Ingredient('Cheese (gram)', 300), new Ingredient('BBQ Sauce (ml)', 500)])
  ];

  constructor() {

  }

  public GetRecipes() { return this.recipes.slice(); }

  public GetRecipe(id: number): Recipe {
    return this.recipes[id];
  }

}
