import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() newItem: any; //to jest ta komorka ktoa przezkazujemy dziecku //@Input newItem: Subject<any>
  myModal;
  constructor(private modalService:NgbModal) { /*zeby mozna bylo otworzyc okno modalne*/


  }

  openModal(content) { /*nocntent musizmy z funkcji odebrac*/
    this.myModal = this.modalService.open(content);
    /*na otwartym modalu definiujemy co sie stanie przy wyjsciu, czekamy na argument data ktory zostanie przekazany w momencie klikniecia close*/
    /*tu dopiero wysylamy promisa*/
    // this.myModal.result.then((data)=> {
    //   this.newItem.next(data);
    // });
  }


  /*then obsluga promisow a subscirbe przy observable*/
  onClick(newItemForm: NgForm) {
    if(newItemForm.valid) {
      this.newItem.next(newItemForm.value); /*sa dwa sposoby na dostep do rzeczy ktore sa w templatce z klasy, albo przez view childa albo przekazujemy do funkcji przez parametr */
      this.myModal.close(); /*werjsa zamykania light*/

      /* wersja druga przekaz dane z formularza do modala*/
    // /*if(newItemForm.valid) {
      //    this.myModal.close(par)????
      // }*/
    }
  }


  ngOnInit() {
  }
}
