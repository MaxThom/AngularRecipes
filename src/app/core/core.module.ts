import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from 'app/recipes/recipe-entities/recipe.service';
import { RecipeStorageService } from '../recipes/recipe-entities/recipe-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeStorageService,
    AuthService,
    AuthGuardService
  ]
})
export class CoreModule { }
