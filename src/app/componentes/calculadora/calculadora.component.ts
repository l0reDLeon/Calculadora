import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  constructor() { }
  display: DisplayComponent = new DisplayComponent;

  regex1:string;
  regex2:string;

  switch:boolean=true;
  input:string="";
  ready = false;
  resultado:string;

  ngOnInit() {
    this.input="";
    this.regex1="";
    this.regex2="";
  }

  numberGroups=[
    [7,8,9,'x'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    ['c',0,'/','=']
  ];

  func(letra:string){
    this.input+=letra;
    if(letra != 'x' && letra != '+' && letra != '-' && letra != '/' && letra != 'c' && letra != '='){
      if(this.switch){
        this.regex1=this.regex1+letra;
      }
      else{
        this.regex2=this.regex2+letra;
      }
    }
    else{
      this.switch= !this.switch;
    }

    if(letra=='c'){
      this.regex1="";
      this.regex2="";
      //funcion borrar display clear
      this.send("c");
    }

    console.log(this.input);
    console.log("regex1= "+this.regex1);
    console.log("regex2= "+this.regex2);

    if(letra === '='){
      this.analyze(this.input);
      console.log(this.input);
      this.input="";

      this.switch=true;
    }
  }

  analyze(cadena){
    let i=0;
    let operador:string;
    for(i;i<cadena.length;i++){
      switch(cadena[i]){
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
          this.input="";
        break;

        case '=':
          this.send(operador);
        break;
      }
    }
  }

  clear(){
    this.input="";
    this.regex1="";
    this.regex2="";
  }

  send(operador:string){
    this.display1(this.regex1,operador,this.regex2);
    this.clear();
    this.ready = true;
  }

  display1(sentence1:string,op:string,sentence2:string){
    let result=this.calculate(sentence1,op,sentence2);
    this.resultado=result.toString();
  }

  calculate(sentence1:string,op:string,sentence2:string){
    console.log("s1: "+sentence1);
    console.log("s2: "+sentence2);
    let p1=parseInt(sentence1);
    let p2=parseInt(sentence2);
    console.log("p1: "+p1);
    console.log("p2: "+p2);
    let result:number;

    switch(op){
      case 'x':
        result=p1*p2;
      break;

      case '-':
        result=p1-p2;
      break;

      case '+':
        result=p1+p2;
      break;

      case '/':
        result=p1/p2;
      break;

      case 'c':
        result=0;
      break;
    }
    console.log("= "+result);
    return result;
  }
}
