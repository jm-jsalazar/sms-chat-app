import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class RingcentralAuthService {
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  private redirectUri = 'http://localhost:4200/callback';
  private authUrl = 'https://platform.ringcentral.com/restapi/oauth/authorize';

  constructor(private http: HttpClient) {}

  login() {
    const url = `${this.authUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
    console.log('Redirecting to:', url);  // Log the redirect URL
    window.location.href = url;
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

    console.log('Requesting token with code:', authCode);  // Log the auth code
    return this.http.post<any>(tokenUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  getUserInfo(token: string) {
    const userInfoUrl = 'https://platform.ringcentral.com/restapi/v1.0/account/~/extension/~';
    const headers = { Authorization: `Bearer ${token}` };
    console.log('Requesting user info with token:', token);  // Log the access token
    return this.http.get<any>(userInfoUrl, { headers });
  }
}
