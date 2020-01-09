import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import {MatSelectModule,  MAT_LABEL_GLOBAL_OPTIONS, MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

// import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './Component/add-to-do/add-to-do.component';
import { ViewToDoComponent } from './Component/view-to-do/view-to-do.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from '@angular/material/dialog';

import { DialogBoxComponent } from './Component/dialog-box/dialog-box.component';
import { LoginComponent } from './Component/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './Component/register/register.component';
import { AlwaysAuthGuard } from './Guard/always-auth.guard';
import { HomeComponent } from './Component/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    ViewToDoComponent,
    DialogBoxComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    JwtModule,

    
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
    //  MatMomentDateModule,

  ],
  providers: [AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
