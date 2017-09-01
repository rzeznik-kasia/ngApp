import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SetColorDirective} from "./set-color.directive";
/*kazdy zewnetrzuy modul moze byc pobrany na rzadanie ladowany po kliknieciu w komponent,*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SetColorDirective
  ],
  exports: [
    SetColorDirective
  ]
})
export class MyDirectivesModule { }
