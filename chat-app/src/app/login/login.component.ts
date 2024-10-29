import { Component } from '@angular/core';
import { RingcentralAuthService } from '../ringcentral-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: RingcentralAuthService) {}

  onLogin() {
    this.authService.login();  // Trigger login modal
  }
}
