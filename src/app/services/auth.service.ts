import { Injectable } from '@angular/core';
import {AuthServiceInterface} from "./auth.service.interface";

@Injectable()
export class AuthService implements AuthServiceInterface{

  constructor() { }

  isAuthenticated(): void {
  }

  logIn(loginData): void {
    console.log(loginData);
  }

  logOut(): void {
  }
}
