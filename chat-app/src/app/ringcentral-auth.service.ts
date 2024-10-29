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
  private tokenUrl = 'https://platform.ringcentral.com/restapi/oauth/token';
  private userInfoUrl = 'https://platform.ringcentral.com/restapi/v1.0/account/~/extension/~';

  constructor(private http: HttpClient) {}

  login() {
    const url = `https://platform.ringcentral.com/restapi/oauth/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
    window.location.href = url;
  }

  getToken(authCode: string) {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });

    return this.http.post(this.tokenUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  getUserInfo(accessToken: string) {
    return this.http.get(this.userInfoUrl, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
  }
}
