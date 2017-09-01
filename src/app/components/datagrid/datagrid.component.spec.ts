import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DatagridComponent} from "./datagrid.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('datagrid component', ()=> {
  /*musimy stworzyc modul ktory zawiera cos co testujemy*/

  let fixture: ComponentFixture<DatagridComponent>; /*opakowany komponent w narzedzia do testowania*/
  let template: DebugElement /*to co jest w klasie - ten model*/
  let instance: DatagridComponent; /*instancja tego co chemy testowac, np. new DataGrid*/

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        DatagridComponent //testujemy datagrid compontnet
      ]
    })
  })

  it('should create instance with 0 row', ()=> {
    fixture = TestBed.createComponent(DatagridComponent);
    template = fixture.debugElement; //zobaczymy co w tej templatce jest, tbody jest pusciutkie - tak powinno byc // templatka umozliwiajaca np. wyszukiwanie

    expect(fixture).toBeTruthy();
    console.log(template);
    const rows = template.queryAll(By.css('table tbody tr'))
    console.log(rows); //widac ze jest pusta tablica

    expect(rows.length).toBe(0);
  });

  it('should create instance with 2 rows', ()=> {
    fixture = TestBed.createComponent(DatagridComponent);
    template = fixture.debugElement; //zobaczymy co w tej templatce jest, tbody jest pusciutkie - tak powinno byc // templatka umozliwiajaca np. wyszukiwanie
    instance = fixture.componentInstance;
    instance.items = [{name: "joe"}, {name: "mike"}]

    console.log(template);

    instance.config = ['name'];

    fixture.detectChanges();
    const rows = template.queryAll(By.css('table tbody tr'));
    console.log('rows' + rows.length); //widac ze jest pusta tablica

    //expect(rows.length).toBe(0); to na chwile zakomentowac bo nie przejdzie
    //sprawdzenie ze elementow jest 2
    expect(rows.length).toBe(2);
    //expect(rows[0].getText());
    //console.log('..', );
    const el1 = rows[0].nativeElement.innerHTML;
    expect(el1).toContain('joe');


    const el1Body = rows[0];
    console.log(el1Body.queryAll(By.css('td')));
    // serwisy sie trudno testuje, bo sie responsy mockuje.  funkcje komponentu sie prosto testuje



  });

})
