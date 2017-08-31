import {Component, OnInit} from '@angular/core';
import {WorkersService} from "../../services/workers.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers: [
    WorkersService
  ]
})
export class WorkersComponent implements OnInit {

  workers;

  constructor(private workerService: WorkersService) {
  }

  ngOnInit() {
    this.workerService.fetch()
      .subscribe((data) => {

      debugger;
        this.workers = data;
      })
  }

}
