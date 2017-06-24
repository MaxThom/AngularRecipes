import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tuna', 2),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  AddIngredient(element: Ingredient): void {
    this.ingredients.push(element);
  }

}
