import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RingcentralAuthService {
  private clientId = 'a7bfs2CIUbId6UWikfxHCC';
  private clientSecret = '7IL4VgEp7kmekwsoWObbsXWkY7rz8jrZrcBYY4EpWpny';
  private redirectUri = 'http://localhost:4200/callback'; // Adjust if necessary
  private authUrl = 'https://platform.ringcentral.com/restapi/oauth/authorize';

  constructor(private http: HttpClient) { }

  // Function to handle login redirect
  login() {
    const url = `${this.authUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
    window.location.href = url;  // Redirect to RingCentral login
  }

  // Function to handle the token exchange
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
