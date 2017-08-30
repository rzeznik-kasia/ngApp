import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'register-form', component: RegisterFormComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
