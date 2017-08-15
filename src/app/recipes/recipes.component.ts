import { Component, OnInit } from '@angular/core';
import { RecipeStorageService } from './recipe-entities/recipe-storage.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {



  constructor(private recipeStorage: RecipeStorageService) { }

  ngOnInit() {
    if (!this.recipeStorage.firstLoad) {
      this.recipeStorage.FetchData();
      this.recipeStorage.firstLoad = true;
    }

  }


}
