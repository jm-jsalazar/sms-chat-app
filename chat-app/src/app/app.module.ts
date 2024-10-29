import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { RingcentralAuthService } from './ringcentral-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RingcentralAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
