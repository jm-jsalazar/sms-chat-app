import { Component } from '@angular/core';
import { RingcentralAuthService } from '../ringcentral-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: RingcentralAuthService) {}

  onLogin() {
    // Trigger the RingCentral OAuth login
    this.authService.login();
  }
}
