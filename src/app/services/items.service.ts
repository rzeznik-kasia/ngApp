import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ItemsService implements CRUDServiceInterface {

  constructor() { }
//pod konstruktorem ctrl i + ctrl a i implementujemy

  fetch(filters?: any): Observable<any> {
    return null;
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
