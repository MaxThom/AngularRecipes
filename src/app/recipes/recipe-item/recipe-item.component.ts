import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../Entities/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeDisplay') recipeDisplay: Recipe;
  @Input('index') index: number;

constructor() { }

  ngOnInit() {
  }

}
