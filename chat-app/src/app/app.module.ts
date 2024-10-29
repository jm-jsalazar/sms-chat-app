import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Required for ngModel binding
import { HttpClientModule } from '@angular/common/http';  // Required for HTTP requests
import { RouterModule } from '@angular/router';  // Import RouterModule for routing

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  // Import the login component
import { CallbackComponent } from './callback/callback.component';  // Import the callback component

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Import FormsModule for two-way data binding
    HttpClientModule,  // Import HttpClientModule for making HTTP requests
    RouterModule.forRoot([])  // Import RouterModule and define your routes (empty array for now)
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap with the main app component
})
export class AppModule { }
