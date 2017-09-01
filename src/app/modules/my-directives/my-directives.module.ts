import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SetColorDirective} from "./set-color.directive";
import {MyComponent} from "./my.component";
import {RouterModule} from "@angular/router";
/*kazdy zewnetrzuy modul moze byc pobrany na rzadanie ladowany po kliknieciu w komponent,*/
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyComponent
      }
    ])
  ],
  declarations: [
    SetColorDirective,
    MyComponent
  ],
  exports: [
    SetColorDirective,
    MyComponent //ten komponent jest dostepny w glownej aplikacji teraz
  ]
})
export class MyDirectivesModule { }
