import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  @Input() items: any[]; //mogloby byc any
  @Input() config: any[];
  @Output() removeEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(id) {
    this.removeEvent.emit(id);
    //console.log(id); //przenowimy loga do parenta
  }

}
