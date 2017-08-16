import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import 'rxjs/Rx';
import { Recipe } from './recipe.model';
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class RecipeStorageService {

  public firstLoad: boolean = false;

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {

  }

  public SaveData() {
    const token = this.authService.GetToken();
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://ng-recipe-book-fe56b.firebaseio.com/recipes.json?auth=' + token, this.recipeService.GetRecipes());
  }

  public FetchData() {
    //const token = this.authService.GetToken();

    this.http.get('https://ng-recipe-book-fe56b.firebaseio.com/recipes.json')//?auth=' + token)
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
