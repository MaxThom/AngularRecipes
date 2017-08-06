import {Component,  OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(private IngredientData: ShoppingListService, private recipeData: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeData.GetRecipe(+params['id']);
    });
  }

  SendIngredients() {
    this.IngredientData.AddListIngredients(this.recipe.ingredients);
  }

  DeleteRecipe(): void {
    this.recipeData.DeleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }

}
