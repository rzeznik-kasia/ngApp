import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() newItem: any; //to jest ta komorka ktoa przezkazujemy dziecku //@Input newItem: Subject<any>
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.newItem.next(Date.now());
  }
}
