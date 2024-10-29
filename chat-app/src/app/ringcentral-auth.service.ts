import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment'


@Injectable({
  providedIn: 'root'
})
export class RingcentralAuthService {
  private clientId = environment.clientId;  // Replace with actual client ID
  private clientSecret = environment.clientSecret;  // Replace with actual client secret
  private redirectUri = 'http://localhost:4200/callback';  // Your callback URL
  private authUrl = 'https://platform.ringcentral.com/restapi/oauth/authorize';

  constructor(private http: HttpClient) {}

  login() {
    const url = `${this.authUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
    window.location.href = url;  // Redirect to RingCentral login modal
  }

  getToken(authCode: string) {
    const tokenUrl = 'https://platform.ringcentral.com/restapi/oauth/token';
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });

    return this.http.post(tokenUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}