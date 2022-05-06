import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ActionsComponent } from './actions/actions.component';


const routes: Routes = [
  {path:'',  redirectTo:'/categories',  pathMatch: 'full', },
  {path:'categories', component:CategoriesComponent},
  {path:'edit_category', component:ActionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
