import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() controls;
  @ViewChild('searchForm') searchForm: NgForm;

  constructor() { }


  ngAfterViewInit(): void {
    this.searchForm.valueChanges
      .subscribe((value)=> {
        console.log(value); /* to jest sposob na pobranie danych z formularza*/
      });


  }

  ngOnInit() {
  }

}
