import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {RouterModule} from "@angular/router";
import { SearchComponent } from './components/search/search.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import {BrowserXhr, HttpModule} from "@angular/http";
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { AuthComponent } from './components/auth/auth.component';
import {AuthService} from "./services/auth.service";
import {FormsModule} from "@angular/forms";
import {CORS} from "./utils/cors";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WorkersComponent } from './components/workers/workers.component';
import { AddItemComponent } from './components/add-item/add-item.component';


const lazyLoadingModulePath = 'app/modules/my-directives/my-directives.module#MyDirectivesModule';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterFormComponent,
    SearchComponent,
    DatagridComponent,
    MapToIterablePipe,
    AuthComponent,
    WorkersComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule, /*moduly zawsze podlaczamy do importu*/
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'register-form', component: RegisterFormComponent},
      {path: 'workers', component: WorkersComponent},
      {path: 'lazy', loadChildren: lazyLoadingModulePath}

    ]),
    FormsModule
  ],
  providers: [
    AuthService,
    {provide: BrowserXhr, useClass: CORS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
