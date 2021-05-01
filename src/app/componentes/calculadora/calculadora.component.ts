import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})

export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

   test3 = "";
   isOk = false;
 
   display1(test: string){
     this.isOk = true;
     this.test3 +=test;
   }

  numberGroups=[
    [7,8,9,'()'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    ['c',0,'/','=']
  ];

  send(cadena: string){
  }

  mult(){
  }

  divide(){
  }

  sum(){
  }

  dif(){
  }

}
