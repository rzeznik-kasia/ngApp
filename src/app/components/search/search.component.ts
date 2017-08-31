import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() controls;
  @Input() filters: BehaviorSubject<any>; /*typ generyczny wiec nalezy powiedz co tam bedzie*/
  @ViewChild('searchForm') searchForm: NgForm;

  constructor() { }


  ngAfterViewInit(): void {
    this.searchForm.valueChanges
      .subscribe((value)=> {
        console.log(value); /* to jest sposob na pobranie danych z formularza*/
        this.filters.next({...this.filters.getValue(), ...value}); /*zachowalismy stara wartosc. ...innymi slowy
        itemsPerPAge:5, innymi slowy rozmija na wlasciwosci i dołącza. ...spread operator*/

        /*teraz robimy ze przy kazdym znaku idzie request do esrvera*/



      });


  }

  ngOnInit() {
  }

}
