import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { CanComponentDeactivate } from './can-deactivate.service';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) frm: NgForm;

  subscribedObject: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  onAddItem(f: NgForm) {
    const ingredient = new Ingredient(
      f.value.name,
      f.value.amount
    );

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    }
    else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.reset();
  }

  add() {
    console.log(this.route.snapshot['_routerState'].url);
  }

  reset() {
    this.editMode = false;
    this.frm.reset();
  }

  delete() {
    if (confirm("Really delete item ?")) {
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.reset();
    }
  }

  constructor(private shoppingListService: ShoppingListService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribedObject = this.shoppingListService.shoppingItemEdited.subscribe(
      (n: number) => {
        this.editMode = true;
        this.editedItemIndex = n;
        this.editedItem = this.shoppingListService.getIngredient(n);
        this.frm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      })
  }

  ngOnDestroy() {
    this.subscribedObject.unsubscribe();
  }
}
