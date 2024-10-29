import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RingcentralAuthService } from '../ringcentral-auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private authService: RingcentralAuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];
      console.log('Authorization code received:', authCode);  // Log the authorization code

      if (authCode) {
        this.authService.getToken(authCode).subscribe(response => {
          const accessToken = response.access_token;
          console.log('Access token received:', accessToken);  // Log the access token
          
          this.authService.getUserInfo(accessToken).subscribe((user: any) => {
            console.log('User info received:', user);  // Log user details
            this.user = user;
          });
        }, error => {
          console.error('Error getting token:', error);  // Log token error
        });
      }
    });
  }
}
