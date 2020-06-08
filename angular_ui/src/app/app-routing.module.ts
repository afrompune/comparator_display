import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { SelectRecipeInfoComponent } from './recipes/select-recipe-info/select-recipe-info.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ResultComponent } from './result/result.component';
import { DataComponent } from './data/data.component';
import { SelectResultComponent } from './result/select-result/select-result.component';
import { ResultDetailComponent } from './result/result-detail/result-detail.component';
import { SelectDataComponent } from './data/select-data/select-data.component';
import { DataDetailComponent } from './data/data-detail/data-detail.component';

const appRoutes: Routes = [
    // { path: '', component: HeaderComponent },
    {
        path: 'result', component: ResultComponent,
        children: [
            { path: '', component: SelectResultComponent },
            { path: ':id', component: ResultDetailComponent }
        ]
    },
    {
        path: 'data', component: DataComponent,
        children: [
            { path: '', component: SelectDataComponent },
            { path: ':id', component: DataDetailComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }