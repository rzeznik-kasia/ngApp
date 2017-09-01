import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DatagridComponent} from "./datagrid.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('datagrid component', ()=> {
  /*musimy stworzyc modul ktory zawiera cos co testujemy*/

  let fixture: ComponentFixture<DatagridComponent>; /*opakowany komponent w narzedzia do testowania*/
  let template: DebugElement /*to co jest w klasie - ten model*/
  let instance: DatagridComponent; /*instancja tego co chemy testowac*/

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        DatagridComponent //testujemy datagrid compontnet
      ]
    })
  })

  it('should create instance', ()=> {
    fixture = TestBed.createComponent(DatagridComponent);
    template = fixture.debugElement; //zobaczymy co w tej templatce jest, tbody jest pusciutkie - tak powinno byc

    expect(fixture).toBeTruthy();
    console.log(template);
    const rows = template.queryAll(By.css('table tbody tr'))
    console.log(rows);

  });

})
