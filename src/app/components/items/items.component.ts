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

  items: any[] = [1, 2, 4]; //komponent nie powinien miec zaleznosci

  constructor(private itemsService: ItemsService) {
    //tu nie
  }

  //przy uzyciu http widok widzi z jakiego adresu przychodza dane, zle jak tak jest

  ngOnInit() { //wlasciwa funkcja do pracy z komponentem
    this.itemsService.fetch().
      subscribe((response)=> {
      console.log(response);
      })
  }

}
