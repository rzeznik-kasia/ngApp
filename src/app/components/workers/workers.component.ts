import {Component, OnInit} from '@angular/core';
import {WorkersService} from "../../services/workers.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

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
  filters: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private workerService: WorkersService) {
  }

  ngOnInit() {
    this.filters
      .subscribe((data)=> {
      console.log(data);
      })
    this.workerService.fetch()
      .subscribe((resp) => { /*response serwera mozna wczesniej zmapowac ale jak nie to tak jak ponizej:*/
        this.workers = resp.json().data; /*albo tu jsonem wyciagamy body abo w workers.service.ts tam trzeba jakos dodac sciezke do tego endpointa*/
      })
  }

  removeWorker(id) {
        console.log(id);
      }

}
