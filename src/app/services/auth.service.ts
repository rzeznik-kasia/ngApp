import { Injectable } from '@angular/core';
import {AuthServiceInterface} from "./auth.service.interface";
import {Http} from "@angular/http";
import {Settings} from "../utils/ssettings";

@Injectable()
export class AuthService implements AuthServiceInterface{

  access: boolean = false;
  constructor(private http:Http) { }

  isAuthenticated(): void {
  }

  logIn(loginData): void {
    this.http.post(Settings.LOGIN_END_POINT, loginData);
    console.log(loginData);
  }

  logOut(): void {
  }
}
