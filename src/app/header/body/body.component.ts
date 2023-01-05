import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  valor1:number=0;
  valor2:number=0;  
  @ViewChild('select') selector!:ElementRef

  mostrar(){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
