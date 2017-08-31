import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  @Input() items: number[] = [
    1, 2, 3, 4, 5
  ];

  constructor() { }

  ngOnInit() {
  }

}
