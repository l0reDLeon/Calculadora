import { Component, OnInit, Input } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  constructor() {
    this.prueba();
  }

  @Input() resultado: string;
  @Input() input:string;

  calculadora: CalculadoraComponent = <CalculadoraComponent>{};

  ngOnInit() {
    this.prueba();
  }

  prueba(){
    console.log(this.resultado);
  }

  // display(sentence1:string,op:string,sentence2:string){
  //   let result=this.calculate(sentence1,op,sentence2);
  //   this.resultado=result.toString();
  //   this.p_result=result;
  // }

  // calculate(sentence1:string,op:string,sentence2:string){
  //   console.log("s1: "+sentence1);
  //   console.log("s2: "+sentence2);
  //   let p1=parseInt(sentence1);
  //   let p2=parseInt(sentence2);
  //   console.log("p1: "+p1);
  //   console.log("p2: "+p2);
  //   let result:number;

  //   switch(op){
  //     case 'x':
  //       result=p1*p2;
  //     break;

  //     case '-':
  //       result=p1-p2;
  //     break;

  //     case '+':
  //       result=p1+p2;
  //     break;

  //     case '/':
  //       result=p1/p2;
  //     break;

  //     case 'c':
  //       result=0;
  //     break;
  //   }
  //   console.log("= "+result);
  //   return result;
  // }
}
