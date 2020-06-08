import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { SelectRecipeInfoComponent } from './recipes/select-recipe-info/select-recipe-info.component';
import { CanDeactivateGuard } from './shopping-list/shopping-edit/can-deactivate.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { ResultComponent } from './result/result.component';
import { DataComponent } from './data/data.component';
import { ResultListComponent } from './result/result-list/result-list.component';
import { SelectResultComponent } from './result/select-result/select-result.component';
import { ResultDetailComponent } from './result/result-detail/result-detail.component';
import { DataListComponent } from './data/data-list/data-list.component';
import { SelectDataComponent } from './data/select-data/select-data.component';
import { DataDetailComponent } from './data/data-detail/data-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    SelectRecipeInfoComponent,
    RecipeEditComponent,
    ResultComponent,
    DataComponent,
    ResultListComponent,
    SelectResultComponent,
    ResultDetailComponent,
    DataListComponent,
    SelectDataComponent,
    DataDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
