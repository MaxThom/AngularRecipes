import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import 'rxjs/Rx';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeStorageService {

  public firstLoad: boolean = false;

  constructor(private http: Http, private recipeService: RecipeService) {

  }

  public SaveData() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://ng-recipe-book-fe56b.firebaseio.com/recipes.json', this.recipeService.GetRecipes());
  }

  public FetchData() {
    this.http.get('https://ng-recipe-book-fe56b.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      .subscribe(
        (recipe: Recipe[]) => {
          this.recipeService.UpdateAllRecipes(recipe);
        });

  }

}
