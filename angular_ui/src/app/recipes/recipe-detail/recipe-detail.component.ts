import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected: Recipe;
  id: number;

  constructor(private rcpService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((p: Params) => {
      console.log("id : " + p['id']);
      this.id = +p['id'];
      this.recipeSelected = this.rcpService.getRecipeById(this.id);
    })
  }

  addIngredientToShoppingList() {
    this.rcpService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }

  onDeleteRecipe() {
    if (confirm("Really delete Recipe ?")) {
      this.rcpService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
  }
}
