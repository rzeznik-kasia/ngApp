import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

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
    itemsPerPage: 5
  });

  items: any[]; //komponent nie powinien miec zaleznosci od danych

  constructor(private itemsService: ItemsService) {
    this.filters
      .subscribe((data)=> {
        this.fetchItems(); /*!!!!! to bylo wazne*/
    });
  }

  //przy uzyciu http widok widzi z jakiego adresu przychodza dane, zle jak tak jest

  ngOnInit() { //wlasciwa funkcja do pracy z komponentem
    this.fetchItems();
  }

  removeItem(id) {
    if(confirm('are you sure?')) {
      this.itemsService
        .remove(id)
        .subscribe((resp)=> {
          this.fetchItems();
        })
    }

  }

  private fetchItems() {
    this.itemsService.fetch(this.filters.getValue()).
    subscribe((data)=> {
      this.items = data;
    })
  }
}
