import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingrdientsChanged = new Subject<Ingredient[]>();
    shoppingItemEdited = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
    ];

    getShoppingList() {
        return this.ingredients.slice();
    }

    getIngredient(n : number) {
        return (this.ingredients[n]);

    }

    addIngredient(i: Ingredient) {
        this.ingredients.push(i);
        this.aggregateIngredients();
        //alert("Ingredients added.")
        this.ingrdientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(id: number, i: Ingredient) {
        this.ingredients[id] = i;

        this.aggregateIngredients();
        this.ingrdientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
        this.ingrdientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingrs: Ingredient[]) {

        this.ingredients.push(...ingrs);
        //Same as below -    ... is a spread operator.
        // for (var ingr of ingrs) {
        //     this.ingredients.push(ingr);
        // }

        this.aggregateIngredients();
        //alert("Ingredients added.")
        this.ingrdientsChanged.next(this.ingredients.slice());
    }

    aggregateIngredients() {
        let m = new Map();

        for (let ingr of this.ingredients) {
            let amount = 0;
            if (m.has(ingr.name)) {
                amount = +m.get(ingr.name);
            }
            m.set(ingr.name, amount + (+ingr.amount));
        }

        this.ingredients = [];
        for (let [key, value] of m) {
            this.ingredients.push({ name: key, amount: value })
        }
    }

}
