import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {RouterModule} from "@angular/router";
import { SearchComponent } from './components/search/search.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import {HttpModule} from "@angular/http";
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterFormComponent,
    SearchComponent,
    DatagridComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'register-form', component: RegisterFormComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
