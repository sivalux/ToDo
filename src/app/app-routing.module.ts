import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToDoComponent } from './Component/add-to-do/add-to-do.component';
import { ViewToDoComponent } from './Component/view-to-do/view-to-do.component';


const routes: Routes = [
  {
    path: 'addtodo',
    component: AddToDoComponent
  },

  {
    path: '',
    component: ViewToDoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
