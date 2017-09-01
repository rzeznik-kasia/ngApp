import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() newItem: any; //to jest ta komorka ktoa przezkazujemy dziecku //@Input newItem: Subject<any>
  constructor(private modalService:NgbModal) { /*zeby mozna bylo otworzyc okno modalne*/


  }

  ngOnInit() {
  }

  onClick(newItemForm) {
    this.newItem.next(newItemForm.value);
  }

  openModal(content) { /*nocntent musizmy z funkcji odebrac*/

    this.modalService.open(content);
  }
}
