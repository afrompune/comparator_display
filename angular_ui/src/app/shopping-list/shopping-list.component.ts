import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subjectSubscriptionRef: Subscription;

  addIngredientToList(i: Ingredient) {
    this.shoppingListService.addIngredient(i);
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();

    this.subjectSubscriptionRef = this.shoppingListService.ingrdientsChanged.subscribe((i: Ingredient[]) =>
      this.ingredients = i
    )
  }

  onEdit(i : number) {
    this.shoppingListService.shoppingItemEdited.next(i);

  }

  deleteIngredient(id: number) {
    if (confirm('Do you really want to delete this ingredient ?')) {
      this.shoppingListService.deleteIngredient(id);
    }
  }

  ngOnDestroy() {
    this.subjectSubscriptionRef.unsubscribe();
  }
}
