import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Settings} from "../utils/ssettings";
import {Http} from "@angular/http";

@Injectable()
export class WorkersService implements CRUDServiceInterface {

  constructor(private http:Http) { }

  fetch(): Observable<any> { /*filtrujemy po stronie klienta tu*/
    return this.http.get(Settings.WORKERS_END_POINT);
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
