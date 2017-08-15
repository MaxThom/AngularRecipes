import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../Entities/recipe.model';
import { forEach } from '@angular/router/src/utils/collection';
import { RecipeService } from '../Entities/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private RecipeService: RecipeService, private router: Router) {



    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.InitForm();
      }
    );

  }

  ngOnInit() {
  }

  OnRecipeFormSubmit(): void {
    console.log(this.recipeForm.value);
    if (this.editMode) {
      this.RecipeService.UpdateRecipe(this.id, this.recipeForm.value);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.RecipeService.AddNewRecipe(this.recipeForm.value);
      this.router.navigate(['/recipes', this.RecipeService.GetRecipes().length - 1]);
    }

  }

  OnAddIngredient(): void {
    let ingredientGroup = new FormGroup({
      'name': new FormControl('', Validators.required),
      'amount': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    (<FormArray> this.recipeForm.get('ingredients')).push(ingredientGroup);
  }

  OnRecipeFormCancel(): void {
      this.router.navigate(['../'], {relativeTo: this.route});
  }

  private InitForm(): void {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const currentRecipe = this.RecipeService.GetRecipe(this.id);
      recipeName = currentRecipe.name;
      recipeDescription = currentRecipe.description;
      recipeImagePath = currentRecipe.imagePath;

      for (const ing of currentRecipe.ingredients) {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ing.name, Validators.required),
          'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath, [Validators.required]),
      'ingredients': recipeIngredients
    });
  }

  public GetIngredientsControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  public DeleteIngredient(index: number): void {
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(index);
  }
}
