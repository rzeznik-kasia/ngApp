import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions} from "@angular/http";
import {Settings} from "../utils/ssettings";
import "rxjs/add/operator/map";

@Injectable()
export class ItemsService implements CRUDServiceInterface {

  constructor(private http:Http) {
  }
//pod konstruktorem ctrl i + ctrl a i implementujemy

  fetch(filters?: any): Observable<any> {
    const reqOpts: RequestOptions = new RequestOptions();
    reqOpts.params = filters;
    console.log("dochodza" +  filters);
    return this.http
    //.get(Settings.ITEMS_END_POINT + "?title=" + filters.title)
      .get(Settings.ITEMS_END_POINT, reqOpts)/*z anularem tak wyglada*/
      .map((response)=> { // wzorzec obserwer, rejestrujesz funkcje i jest wolana keidy trzeba, mozna mapowac obiekty -> cyzt. reactivex
        return response.json();
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
      //.delete(`${Settings.ITEMS_END_POINT}/{id}`);//live template
    //.delete(Settings.ITEMS_END_POINT + "/" + id, opts); //ecma5 <- to dla opts z RequestOptions
  .delete(Settings.ITEMS_END_POINT + "/" + id); //ecma5



  }
}
