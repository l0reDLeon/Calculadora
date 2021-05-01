import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  constructor() { }
  noc: DisplayComponent = new DisplayComponent;
  test3:string = "";

  regex1:string;
  regex2:string;

  switch:boolean=true;
  input:string="";
  ready = false;

  ngOnInit() {
    this.test3 = "";
    this.input="";
  }
  cadena: string;
  //  isOk = false;
 
  //  display1(test: string){
  //    this.isOk = true;
  //    this.test3 +=test;
  //  }

  numberGroups=[
    [7,8,9,'x'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    ['c',0,'/','=']
  ];

  func(letra:string){
    this.input+=letra;
    
    if(this.switch){
      this.regex1+=letra;
    }
    else{
      if(!(letra =='x' || letra =='+' || letra =='-' || letra =='/' || letra =='c' || letra =='=')){
        this.regex2+=letra;
      }
      else{
        this.switch= !this.switch;
      }
    }
    if(letra=='c'){
      this.regex1="";
      this.regex2="";
      //funcion borrar display clear
      this.send("c");
    }

    console.log(this.cadena);
    console.log(this.input);
    if(letra === '='){
      this.analyze(this.input);
    }
  }

  analyze(cadena){
    let i=0;
    let operador:string;
    for(i;i<this.test3.length;i++){
      switch(this.test3[i]){
        case 'x': 
          operador='x';
        break;

        case '-': 
          operador='-';
        break;

        case '+': 
          operador="+";
        break;  

        case '/': 
          operador="/";
        break;

        case 'c':
          operador="c";
        break;

        case '=':   
          this.send(operador);
        break;
      }
    }
  }

  clear(){
    this.regex1="";
    this.regex2="";
  }

  send(operador:string){
    this.ready = true;
  }

}
