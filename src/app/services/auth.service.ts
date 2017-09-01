import { Injectable } from '@angular/core';
import {AuthServiceInterface} from "./auth.service.interface";
import {Http} from "@angular/http";
import {Settings} from "../utils/ssettings";

@Injectable()
export class AuthService implements AuthServiceInterface{

  access: boolean = false;
  constructor(private http:Http) {
    this.isAuthenticated();
  }

  isAuthenticated(): void {
    /*request do zerwera sprawdzajacy czy rserwer ma sesje*/
    this.http.get(Settings.AUTH)
      .subscribe((data)=> {
        this.access = data.json().ok;
      });
  }

  logIn(loginData): void {
    /*pierwsyz sposob na przeslanie ciasteczka
    * const opts: RequestOptions = new RequestOptions() // z angular http
    * opts.withCredentioals = true;*/

    this.http.post(Settings.LOGIN_END_POINT, loginData)
      .map((resp)=> {
        return resp.json().ok;
      })// chcemy ze odo subsriba doszlo ok
      .subscribe((ok)=> {
        this.access = ok;
      }); //jak nikt nie slucha ot on nie wyjdzie
    console.log(loginData);
  }

  logOut(): void {
    this.http.get(Settings.LOGOUT_END_POINT)
      .subscribe((resp)=> {
        this.access = false;
      });
  }
}
