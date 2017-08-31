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
      .subscribe((resp) => {
      debugger;
        this.workers = resp.json().data; /*albo tu jsonem wyciagamy body abo w workers.service.ts tam trzeba jakos dodac sciezke do tego endpointa*/
      })
  }

}
