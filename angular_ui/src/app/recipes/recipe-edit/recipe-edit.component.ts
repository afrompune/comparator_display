import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private rcpSvc: RecipeService,
    private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (p: Params) => {
        this.id = p['id'];
        this.editMode = (p['id'] != null);
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients: FormArray = new FormArray([]);


    if (this.editMode) {
      const recipe = this.rcpSvc.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      recipeIngredients = new FormArray(
        recipe.ingredients.map((i) => {
          return new FormGroup({
            'name': new FormControl(i.name, Validators.required),
            'amount': new FormControl(i.amount, [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)])
          }
          )
        })
      )
    }

    this.recipeForm = new FormGroup({

      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });

  }

  onSubmit() {

    let r = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients.map(
        (i) => new Ingredient(i.name, i.amount))
    );

    if (this.editMode) {
      this.rcpSvc.updateRecipe(this.id, r);
    }
    else {
      this.rcpSvc.addRecipe(r);
    }

    this.router.navigate(['..'], { relativeTo: this.route });

  }

  getIngrdientControls() {
    return ((<FormArray>this.recipeForm.get('ingredients')).controls);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('', [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i)
  }

}
