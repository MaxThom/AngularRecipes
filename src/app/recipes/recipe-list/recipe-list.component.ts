import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('recipeSelection') recipeSelection = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Tomato Sauce', 'Tomato Sauce made from an italian mamamia', 'http://www.seriouseats.com/recipes/assets_c/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-thumb-1500xauto-411319.jpg'),
    new Recipe('Homemade Sushi', 'Sushi made of tuna, salmon, shrimps and more', 'http://www.sushibartoronto.ca/assets/images/sushi-bar.jpg'),
    new Recipe('Poutine', 'Renown meal in Quebec province in Canada', 'http://storage-cube.quebecormedia.com/v1/cl_prod/canadian_living/016a62c51915ef984e8281124f5f6850fc93d013/ultimate-poutine.jpg')
  ];

  constructor() { }

  ngOnInit() {
    this.recipeSelection.emit(this.recipes[0]);
  }

  OnRecipeSelectionChanged(name: string):  void {
    for (let item of this.recipes) {
      if (item.name === name) {
        this.recipeSelection.emit(item);
        break;
      }

    }
  }

}


