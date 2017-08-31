import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Settings} from "../utils/ssettings";

@Injectable()
export class ItemsService implements CRUDServiceInterface {

  constructor(private http:Http) {
  }
//pod konstruktorem ctrl i + ctrl a i implementujemy

  fetch(filters?: any): Observable<any> {
    return this.http.get(Settings.ITEMS_END_POINT);
  }

  add(item): Observable<any> {
    return null;
  }

  update(item): Observable<any> {
    return null;
  }

  remove(id): Observable<any> {
    return null;
  }
}
