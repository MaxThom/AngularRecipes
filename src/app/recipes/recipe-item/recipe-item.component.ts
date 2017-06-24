import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeDisplay') recipeDisplay: Recipe;
  @Output('recipeSelection') recipeSelection = new EventEmitter<string>();

constructor() { }

  ngOnInit() {
  }

  OnSelectedRecipeChanged(name: string): void {
    this.recipeSelection.emit(name);
  }

}
