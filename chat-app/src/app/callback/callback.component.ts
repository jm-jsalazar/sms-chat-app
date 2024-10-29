import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RingcentralAuthService } from '../ringcentral-auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private authService: RingcentralAuthService) {}

  ngOnInit(): void {
    console.log('Callback component initialized');
    this.route.queryParams.subscribe((params) => {
      const authCode = params['code'];
      console.log('Authorization code received:', authCode);

      if (authCode) {
        this.authService.getToken(authCode).subscribe(
          (response: any) => {
            const accessToken = response.access_token;
            console.log('Access token received:', accessToken);

            this.authService.getUserInfo(accessToken).subscribe(
              (user) => {
                console.log('User info received:', user);
                this.user = user;
              },
              (error) => {
                console.error('Error fetching user info:', error);
              }
            );
          },
          (error) => {
            console.error('Error getting token:', error);
          }
        );
      }
    });
  }
}
