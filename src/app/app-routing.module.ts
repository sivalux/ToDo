import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToDoComponent } from './Component/add-to-do/add-to-do.component';
import { ViewToDoComponent } from './Component/view-to-do/view-to-do.component';
import { DialogBoxComponent } from './Component/dialog-box/dialog-box.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AlwaysAuthGuard } from './Guard/always-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'addtodo',
    component: AddToDoComponent,
    canActivate: [AlwaysAuthGuard]
  },

  {
    path: 'viewtodo',
    component: ViewToDoComponent,
    canActivate: [AlwaysAuthGuard]
  },
  {
    path: 'confirm',
    component: DialogBoxComponent,
    canActivate: [AlwaysAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
