import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from 'app/recipes/recipe-entities/recipe.service';
import { HttpModule } from '@angular/http';
import { RecipeStorageService } from './recipes/recipe-entities/recipe-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeModule } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RecipeModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, RecipeStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
