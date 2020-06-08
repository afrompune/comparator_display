import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

//low will require to add service in providers of component/module as per required hierarchy.
//@Injectable()
export class RecipeService {
  recipeUpdated = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("Tomato Cheese Pasta", "Awesome Tomato Cheese Pasta",
      "https://p1.piqsels.com/preview/937/743/731/food-power-recipe-ingredient-pasta-tomato.jpg",
      [new Ingredient("Tomato", 10), new Ingredient("Raw Pasta", 1), new Ingredient("Cheese", 1)]
    ),
    new Recipe("Tomato Pasta", "Awesome Tomato Pasta",
      "https://p1.piqsels.com/preview/937/743/731/food-power-recipe-ingredient-pasta-tomato.jpg",
      [new Ingredient("Tomato", 10), new Ingredient("Raw Pasta", 1)]
    )

  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByName(name: string): Recipe {
    return this.recipes.filter(r => r.name === name)[0];
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingrs: Ingredient[]) {
    this.slService.addIngredients(ingrs);
  }

  addRecipe(r: Recipe) {
    this.recipes.push(r);
    this.recipeUpdated.next(this.recipes);
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    this.recipeUpdated.next(this.recipes);
  }


  updateRecipe(i: number, r: Recipe) {
    this.recipes[i] = r;
    this.recipeUpdated.next(this.recipes);
  }


}
