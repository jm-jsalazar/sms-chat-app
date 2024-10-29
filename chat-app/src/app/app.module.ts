import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { RingcentralAuthService } from './ringcentral-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RingcentralAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
