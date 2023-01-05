import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports: [
    BodyComponent
  ],
})
export class HeaderModule { }
