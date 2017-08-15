import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuOptions} from '../shared/enums';
import { RecipeStorageService } from '../recipes/recipe-entities/recipe-storage.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private recipeStorageService: RecipeStorageService) { }

  ngOnInit() {

  }

  OnSaveData(): void {
    this.recipeStorageService.SaveData()
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  OnFetchData(): void {
    this.recipeStorageService.FetchData();
  }

}

