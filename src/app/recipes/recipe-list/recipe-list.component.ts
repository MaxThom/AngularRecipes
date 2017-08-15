import { Component, OnDestroy, OnInit } from '@angular/core';
import {Recipe} from '../Entities/recipe.model';
import {RecipeService} from '../Entities/recipe.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscriptin: Subscription;

  constructor(private recipeData: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeData.GetRecipes();
    this.subscriptin = this.recipeData.refreshRecipe.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptin.unsubscribe();
  }

}


