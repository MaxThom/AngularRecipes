import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeStorageService } from '../../recipes/recipe-entities/recipe-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpened: boolean = false;

  constructor(private recipeStorageService: RecipeStorageService, private authService: AuthService) { }

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

  IsAuthenticated(): boolean {
    return this.authService.IsAuthenticated();
  }

  LogOut(){
    this.authService.LogOut();
  }
}

