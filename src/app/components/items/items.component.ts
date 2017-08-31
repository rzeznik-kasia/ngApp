import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [
    ItemsService
  ]
})
export class ItemsComponent implements OnInit {

  items: any[]; //komponent nie powinien miec zaleznosci

  constructor(private itemsService: ItemsService) {
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
    this.itemsService.fetch().
    subscribe((data)=> {
      this.items = data;
    })
  }
}
