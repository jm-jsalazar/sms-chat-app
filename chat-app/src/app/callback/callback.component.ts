import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RingcentralAuthService } from '../ringcentral-auth.service';

@Component({
  selector: 'app-callback',
  template: '<p>Processing login...</p>',
})
export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: RingcentralAuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];
      if (authCode) {
        this.authService.getToken(authCode).subscribe(response => {
          console.log('Token Response:', response);  // Handle token (store it securely)
        });
      }
    });
  }
}
