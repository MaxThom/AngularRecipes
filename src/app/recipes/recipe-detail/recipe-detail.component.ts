import {Component,  OnInit} from '@angular/core';
import {Recipe} from '../recipe-entities/recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe-entities/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.GetRecipe(+params['id']);
    });
  }

  SendIngredients() {
    this.shoppingListService.AddListIngredients(this.recipe.ingredients);
  }

  DeleteRecipe(): void {
    this.recipeService.DeleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }

}
