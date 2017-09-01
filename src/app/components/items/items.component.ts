import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [
    ItemsService
  ]
})
export class ItemsComponent implements OnInit {

  filters: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 5, /* od tego ustawienia zalezy ile jest itemow*/
    currentPage: 1
  });

  items: any[]; //komponent nie powinien miec zaleznosci od danych
  total: number;

  newItem: Subject<any> = new Subject(); //tworzymy obiekt w parencie na ktorym nasluchujemy zdarzenia

  constructor(private itemsService: ItemsService) {
    this.filters
      .subscribe((data) => {
        this.fetchItems();
        /*!!!!! to bylo wazne*/
      });

    this.newItem.subscribe((data) => { //nasluchiwanie az ktos da nexta i wyswietl dane
      console.log(data);
    })
  }

  //przy uzyciu http widok widzi z jakiego adresu przychodza dane, zle jak tak jest

  ngOnInit() { //wlasciwa funkcja do pracy z komponentem
    this.fetchItems();
  }

  removeItem(id) {
    if (confirm('are you sure?')) {
      this.itemsService
        .remove(id)
        .subscribe((resp) => {
          this.fetchItems();
        })
    }
  }

  private fetchItems() {
    this.itemsService.fetch(this.filters.getValue()).subscribe(({data, total}) => { /*z ecma6 object enhancement*/
      this.items = data;
      /*to tak jak obj obj.data, obj.total*/
      this.total = total;
    })
  }

  /*dlaczego requesty wysylane sa przez serwer, bo:*/

  /*filtry  sa reaktywne jak na nich wywolujesz nexta to wywola sie subcribe, to sei wykona fech items, pojdzie reaquest, filtry zostana przekazane*/
  updateFilters(key, value) {
    console.log(value);
    this.filters.next({...this.filters.getValue(), [key]: value});
    /*robije wlasciwosc i doda wartosc*/
    /*ta funkja ma dostawac klucz i value, bo teraz dostaje value, iterms per page jest zahardkowowane*/
    /*to jest ecma6!!! eh, mozna podac tu obiekt albo dodawac funcje ale teraz jest ladnie*/

  }
}
