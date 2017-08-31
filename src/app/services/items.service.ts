import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Settings} from "../utils/ssettings";
import "rxjs/add/operator/map";

@Injectable()
export class ItemsService implements CRUDServiceInterface {

  constructor(private http:Http) {
  }
//pod konstruktorem ctrl i + ctrl a i implementujemy

  fetch(filters?: any): Observable<any> {
    return this.http
      .get(Settings.ITEMS_END_POINT)
      .map((response)=> { // wzorzec obserwer, rejestrujesz funkcje i jest wolana keidy trzeba, mozna mapowac obiekty -> cyzt. reactivex
        return response.json().data;
      });
  }

  add(item): Observable<any> {
    return null;
  }

  update(item): Observable<any> {
    return null;
  }

  remove(id): Observable<any> {
    return this.http
      .delete(Settings.ITEMS_END_POINT + "/" + id);
  }
}
